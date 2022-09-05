import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Box, Badge, Input, Select, Button } from "native-base";
import { Icon } from "react-native-elements";
import MSConfig from "configs/MSConfig";
import MSHandler from "handlers/MSHandler";
import CategoryStore from "stores/CategoryStore";
import StreamStore from "stores/StreamStore";
import AppStore from "stores/AppStore";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { useDimensions } from "@react-native-community/hooks";
import { useMoralis } from "react-moralis";
import HlsjsVideoStreamer from "vimond-replay/video-streamer/hlsjs";
import { Replay } from "vimond-replay";
import "vimond-replay/index.css";
import { appStyles } from "configs/styles";
import colors from "configs/colors";
import { observer } from "mobx-react";

import { ProfileId } from "pb/profile_pb";
import { StreamInfo, StreamKeyOptions } from "pb/publish_pb";
import { Stream } from "pb/stream_pb";
import { PublishServiceClient } from "pb/PublishServiceClientPb";
import { StreamServiceClient } from "pb/StreamServiceClientPb";

import ChatBlock from "screens/blocks/ChatBlock";
import ShareBlock from "./blocks/ShareBlock";

const StreamManager = observer(({ navigation, route }) => {
  const intervalRef = useRef();
  const timeoutRef = useRef();
  const { width: widthScreen } = useDimensions().window;
  const nftWidth = (widthScreen - 240 - 155) / 8;
  const chatWidth = useSharedValue(2 * nftWidth + 30);
  const chatStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(chatWidth.value, {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      }),
    };
  });

  const [stream, setStream] = useState(null);
  const [isBuffering, setIsBuffering] = useState(false);
  const [title, setTitle] = useState("");
  const [game, setGame] = useState("");
  const [isChatExpanded, setIsChatExpanded] = useStateWithCallbackLazy(false);
  const [isStreamKeyShowed, setIsStreamKeyShowed] = useState(false);
  const [streamKey, setStreamKey] = useState("");
  const [streamUrl, setStreamUrl] = useState(MSConfig.STREAM_URL);
  const { user } = useMoralis();

  const { categories } = CategoryStore;

  useEffect(() => {
    return navigation.addListener("focus", () => {
      AppStore.setMode("Streamer");
    });
  }, [navigation]);

  useEffect(() => {
    return navigation.addListener("blur", () => {
      AppStore.setMode("User");
    });
  }, [navigation]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      CategoryStore.fetchCategory();
      StreamStore.fetchStream(() => {
        const { streams } = StreamStore;
        const stream = streams.find(
          (i) => user && user.id === i.getStreamer().getId() && i.getLive()
        );
        if (stream) {
          clearInterval(intervalRef.current);
          setTimeout(() => setStream(stream), 20000);
        }
      });
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [user]);

  useEffect(() => {
    if (user) {
      const q = new ProfileId();
      q.setValue(user.id);
      const publishC = new PublishServiceClient(MSConfig.API_URL);
      publishC
        .readInfo(q, { authorization: `bearer ${user.get("sessionToken")}` })
        .then((s) => {
          setTitle(s.getName());
          setGame(s.getCategory().getId());
        });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const q = new StreamKeyOptions();
      const publishC = new PublishServiceClient(MSConfig.API_URL);
      publishC
        .readKey(q, { authorization: `bearer ${user.get("sessionToken")}` })
        .then((s) => {
          setStreamKey(s.getValue());
        });
    }
  }, [user]);

  useEffect(() => {
    if (stream) {
      console.log({
        getRtmpurl: stream.getRtmpurl(),
        getHlsurl: stream.getHlsurl(),
        getVideourl: stream.getVideourl(),
        getScreenshoturl: stream.getScreenshoturl(),
      });
      clearInterval(intervalRef.current);
    }
  }, [stream]);

  const onHelp = () => {
    MSHandler.openUrl("https://obsproject.com/help");
  };

  const onStreamStateChange = (stateProperties) => {
    if (stateProperties && "playState" in stateProperties) {
      if (stateProperties.playState === "buffering") {
        setIsBuffering(!isBuffering);
        if (!isBuffering) {
          timeoutRef.current = setTimeout(() => {
            setStream(null);
          }, 30000);
        } else {
          clearTimeout(timeoutRef.current);
        }
      }
    }
  };

  const onOpenChat = () => {
    setIsChatExpanded(!isChatExpanded, (isExpanded) => {
      chatWidth.value = isExpanded ? 0 : 2 * nftWidth + 30;
    });
  };

  const onToggleStreamKey = () => {
    setIsStreamKeyShowed(!isStreamKeyShowed);
  };

  const onReset = () => {
    const q = new StreamKeyOptions();
    q.setRenew(true);
    const publishC = new PublishServiceClient(MSConfig.API_URL);
    publishC
      .readKey(q, { authorization: `bearer ${user.get("sessionToken")}` })
      .then((s) => {
        setStreamKey(s.getValue());
      });
  };

  const onCopy = (string) => () => {
    MSHandler.copyString(string);
  };

  const onSave = () => {
    const name = title;
    const category = categories.find((i) => i.getId() === game);

    const q = new StreamInfo();
    q.setName(name);
    q.setCategory(category);
    const publishC = new PublishServiceClient(MSConfig.API_URL);
    publishC
      .updateInfo(q, { authorization: `bearer ${user.get("sessionToken")}` })
      .then((s) => {
        if (stream) {
          const q = new Stream();
          q.setId(stream.getId());
          q.setName(s.getName());
          q.setCategory(s.getCategory());
          const streamC = new StreamServiceClient(MSConfig.API_URL);
          streamC.update(q, {
            authorization: `bearer ${user.get("sessionToken")}`,
          });
        }
      });
  };

  if (!user) return null;
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 45 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[appStyles.row, { margin: 25 }]}>
          <Icon
            type={"material"}
            name={"wifi-tethering"}
            color={colors.primaryDarkColor}
            size={25}
          />
          <Text style={[appStyles.title, { marginLeft: 15 }]}>
            {"Stream manager"}
          </Text>
        </View>

        <View style={[appStyles.row, { marginHorizontal: 25 }]}>
          <View
            style={[
              appStyles.center,
              {
                flex: 0.4,
                height: "100%",
                padding: !stream ? 15 : 0,
                backgroundColor: colors.black,
              },
            ]}
          >
            {!stream ? (
              <>
                <ActivityIndicator
                  color={colors.primaryDarkColor}
                  size={"small"}
                />
                <Text
                  style={[
                    appStyles.text,
                    { textAlign: "center", marginTop: 15 },
                  ]}
                >
                  {"Connect streaming software to start preview"}
                </Text>
                <Text
                  style={[
                    appStyles.text,
                    {
                      color: colors.primaryDarkColor,
                      textAlign: "center",
                      marginTop: 15,
                    },
                  ]}
                  onPress={onHelp}
                >
                  {"STREAM SET UP HELP"}
                </Text>
              </>
            ) : (
              <View style={{ width: "100%", height: "100%" }}>
                <Replay
                  options={{
                    controls: {
                      includeControls: [
                        "playPauseButton",
                        "timeDisplay",
                        "gotoLiveButton",
                        "volume",
                        "qualitySelector",
                        "pipButton",
                        "fullscreenButton",
                      ],
                    },
                  }}
                  source={{
                    streamUrl: stream.getHlsurl(),
                    isLive: stream.getLive(),
                  }}
                  initialPlaybackProps={{ isMuted: true, isPaused: false }}
                  onStreamStateChange={onStreamStateChange}
                >
                  <HlsjsVideoStreamer />
                </Replay>
                <Badge
                  bg={colors.red}
                  _text={{ color: colors.white }}
                  position={"absolute"}
                  top={15}
                  left={15}
                >
                  {"LIVE"}
                </Badge>
              </View>
            )}
          </View>
          <View
            style={[
              appStyles.row,
              { flex: 0.6, padding: 15, backgroundColor: colors.contentBackgroundDarkColor },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={[appStyles.text, { opacity: 0.5 }]}>{"Title"}</Text>
              <Input
                mt={2}
                px={15}
                size={"xl"}
                placeholder={"Title stream..."}
                value={title}
                onChangeText={(text) => setTitle(text)}
              />
              <Text style={[appStyles.text, { opacity: 0.5, marginTop: 15 }]}>
                {"Game"}
              </Text>
              <Select
                mt={2}
                px={15}
                size={"xl"}
                placeholder={"Select game"}
                selectedValue={game}
                onValueChange={(itemValue) => setGame(itemValue)}
              >
                {categories.map((i, k) => (
                  <Select.Item key={k} label={i.getName()} value={i.getId()} />
                ))}
              </Select>
              <View style={[appStyles.row, { marginTop: 15 }]}>
                <Text style={[appStyles.text, { flex: 1, opacity: 0.5 }]}>
                  {"Concurrent viewers"}
                </Text>
              </View>
              <View style={appStyles.row}>
                <Input
                  flex={1}
                  editable={false}
                  mt={2}
                  px={15}
                  size={"xl"}
                  placeholder={"Concurrent viewers"}
                  value={"0"}
                  onChangeText={(text) => {}}
                />
              </View>
            </View>
            <TouchableOpacity
              style={[
                appStyles.center,
                {
                  height: 40,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: colors.primaryDarkColor,
                  marginLeft: 15,
                },
              ]}
              onPress={onSave}
            >
              <Text
                style={[appStyles.text, { color: colors.primaryDarkColor }]}
              >
                {"Save"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            appStyles.row,
            { padding: 15, backgroundColor: colors.contentBackgroundDarkColor },
            { marginHorizontal: 25 },
          ]}
        >
          <Icon
            type={"ionicon"}
            name={"ellipse"}
            color={
              stream && !isBuffering ? colors.primaryDarkColor : colors.white
            }
            size={15}
          />
          <Text style={[appStyles.text, { marginLeft: 15 }]}>
            {!stream
              ? "Start sending us your video from your streaming software to broadcast video"
              : !isBuffering
              ? "Excellent connection"
              : "No data - This stream will end shortly, unless you restart it in your streaming software"}
          </Text>
        </View>
        <ShareBlock stream={stream} />
        <View
          style={{
            backgroundColor: colors.contentBackgroundDarkColor,
            marginTop: 25,
            marginHorizontal: 25,
          }}
        >
          <View
            style={[
              appStyles.row,
              { height: 40 },
              { borderBottomWidth: 1, borderColor: colors.white },
            ]}
          >
            <View
              style={[
                appStyles.center,
                {
                  height: 40,
                  paddingHorizontal: 15,
                  borderBottomWidth: 3,
                  borderColor: colors.primaryDarkColor,
                },
              ]}
            >
              <Text
                style={[appStyles.text, { color: colors.primaryDarkColor }]}
              >
                {"STREAM SETTING"}
              </Text>
            </View>
          </View>
          <View style={{ padding: 25 }}>
            <Text
              style={[
                appStyles.label,
                { color: colors.white, fontFamily: "Montserrat-Bold" },
              ]}
            >
              {"Stream key"}
            </Text>
            <Text style={[appStyles.text, { opacity: 0.5, marginTop: 25 }]}>
              {"Stream key (paste in encoder)"}
            </Text>
            <View style={[appStyles.row, { width: "80%" }]}>
              <View
                style={[
                  appStyles.row,
                  {
                    flex: 1,
                    height: 40,
                    borderBottomWidth: 1,
                    borderColor: colors.dividerDarkColor,
                  },
                ]}
              >
                <Text
                  style={[appStyles.text, { flex: 1, marginRight: 15 }]}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {isStreamKeyShowed ? streamKey : "*".repeat(20)}
                </Text>
                <TouchableOpacity
                  style={appStyles.action}
                  onPress={onToggleStreamKey}
                >
                  <Icon
                    type={"ionicon"}
                    name={isStreamKeyShowed ? "eye-outline" : "eye-off-outline"}
                    color={colors.white}
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: colors.primaryDarkColor,
                  marginLeft: 15,
                }}
                onPress={onReset}
              >
                <Text
                  style={[appStyles.text, { color: colors.primaryDarkColor }]}
                >
                  {"Reset"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: colors.primaryDarkColor,
                  marginLeft: 15,
                }}
                onPress={onCopy(streamKey)}
              >
                <Text
                  style={[appStyles.text, { color: colors.primaryDarkColor }]}
                >
                  {"Copy"}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={[appStyles.text, { opacity: 0.5, marginTop: 15 }]}>
              {"Stream URL"}
            </Text>
            <View style={[appStyles.row, { width: "80%" }]}>
              <View
                style={[
                  appStyles.row,
                  {
                    flex: 1,
                    height: 40,
                    borderBottomWidth: 1,
                    borderColor: colors.dividerDarkColor,
                  },
                ]}
              >
                <Text
                  style={appStyles.text}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {streamUrl}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: colors.primaryDarkColor,
                  marginLeft: 15,
                }}
                onPress={onCopy(streamUrl)}
              >
                <Text
                  style={[appStyles.text, { color: colors.primaryDarkColor }]}
                >
                  {"Copy"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {stream ? (
        <Animated.View style={chatStyle}>
          <ChatBlock
            title={"Chat"}
            filter={{ streamId: stream.getId() }}
            onOpenChat={onOpenChat}
          />
        </Animated.View>
      ) : null}
      {stream && isChatExpanded ? (
        <TouchableOpacity
          style={[
            appStyles.center,
            { position: "absolute", bottom: 15, right: 15 },
            {
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: colors.primaryDarkColor,
            },
          ]}
          onPress={onOpenChat}
        >
          <Icon type={"entypo"} name={"chat"} color={colors.black} size={20} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
});

export default StreamManager;
