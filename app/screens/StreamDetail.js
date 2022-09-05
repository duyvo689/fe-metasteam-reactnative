import React, { useEffect, useState } from "react";
import {
  Platform,
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
import { Icon } from "react-native-elements";
import MSConfig from "configs/MSConfig";
import StreamStore from "stores/StreamStore";
import AssetStore from "stores/AssetStore";
import { useStateWithCallbackLazy } from "hooks";
import { useDimensions } from "@react-native-community/hooks";
import { useMediaQuery } from "react-responsive";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import Collapsible from "react-native-collapsible";
import * as Clipboard from "expo-clipboard";
import HlsjsVideoStreamer from "vimond-replay/video-streamer/hlsjs";
import { Replay } from "vimond-replay";
import "vimond-replay/index.css";
import { appStyles } from "configs/styles";
import colors from "configs/colors";
import { observer } from "mobx-react";

import { Donation } from "pb/token_pb";
import { ProfileId } from "pb/profile_pb";
import { ProfileFollowingServiceClient } from "pb/Profile_followingServiceClientPb";
import { ChatMessage, ChatMessageType } from "pb/chat_pb";
import { ChatServiceClient } from "pb/ChatServiceClientPb";
import { TokenServiceClient } from "pb/TokenServiceClientPb";

import useFollowing from "hooks/useFollowing";
import DonateModal from "screens/modals/DonateModal";
import ChatBlock from "screens/blocks/ChatBlock";
import ProfileItem from "screens/items/ProfileItem";
import InfoItem from "screens/items/InfoItem";
import NFTItem from "screens/items/NFTItem";

const StreamDetail = observer(({ route, navigation }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const { width: widthScreen } = useDimensions().window;
  const nftWidth = (widthScreen - 240 - 155) / 8;
  const chatWidth = useSharedValue(2 * nftWidth + 30);
  const videoWidth = isDesktop
    ? widthScreen - chatWidth - (isDesktop ? 240 : 0)
    : widthScreen;
  const videoHeight = (1080 * videoWidth) / 1920;
  const chatStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(chatWidth.value, {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      }),
    };
  });

  const { id } = route.params;
  const { streams } = StreamStore;
  const stream = streams.find((i) => i.getId() === id);
  const {
    followers: follower,
    isFollowing,
    setIsFollowing,
  } = useFollowing(stream?.getStreamer());

  const [isChatExpanded, setIsChatExpanded] = useStateWithCallbackLazy(false);
  const [isContentExpanded, setIsContentExpanded] =
    useStateWithCallbackLazy(false);
  const [isDonateExpanded, setIsDonateExpanded] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);
  const { Moralis, user } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  useEffect(() => {
    return navigation.addListener("focus", () => {
      setIsReplaying(true);
    });
  }, [navigation]);

  useEffect(() => {
    return navigation.addListener("blur", () => {
      setIsReplaying(false);
    });
  }, [navigation]);

  useEffect(() => {
    StreamStore.fetchStream();
  }, []);

  useEffect(() => {
    (async () => {
      if (user) {
        const { result } = await Web3Api.account.getNFTsForContract({
          chain: "polygon",
          address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
          token_address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
        });
        AssetStore.setAssets(result);
      }
    })();
  }, [user]);

  const onOpenChat = () => {
    setIsChatExpanded(!isChatExpanded, (isExpanded) => {
      chatWidth.value = isExpanded ? 0 : 2 * nftWidth + 30;
    });
  };

  const onOpenContent = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  const onOpenDonate = () => {
    setIsDonateExpanded(!isDonateExpanded);
  };

  const onDonate = (amount, message) => async () => {
    setIsDonateExpanded(!isDonateExpanded);

    if (amount > 0) {
      const q = new Donation();
      q.setReceiverid(stream.getStreamer().getId());
      q.setAmount(amount);

      const tokenC = new TokenServiceClient(MSConfig.API_URL);
      const data = await tokenC.donate(q, {
        authorization: `bearer ${user.get("sessionToken")}`,
      });

      const options = {
        type: "erc20",
        amount: Moralis.Units.Token(amount, "18"),
        receiver: data.getTo(),
        contractAddress: "0xEcb0076BBbF74334CcEC501a1f3Acf9ec5EbA1B9",
      };
      const result = await Moralis.transfer(options);
      /*await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: data.getFrom(),
                    to: data.getTo(),
                    value: data.getValue(),
                    gasPrice: data.getGasprice(),
                    gas: data.getGas(),
                    data: data.getData(),
                    chainId: data.getChainid(),
                    nonce: data.getNonce()
                }]
            });*/
    }

    if (!!message.trim()) {
      const m = new ChatMessage();
      m.setStreamid(stream.getId());
      m.setType(ChatMessageType.CHAT_TEXT);
      m.setText(message.trim());
      const chatC = new ChatServiceClient(MSConfig.API_URL);
      await chatC.sendMessages(m, {
        authorization: `bearer ${user.get("sessionToken")}`,
      });
    }
  };

  const onCopy = (str) => () => {
    if (Platform.OS === "web") {
      navigator.clipboard.writeText(str);
    } else {
      Clipboard.setString(str);
    }
  };

  const onFollow = () => {
    const q = new ProfileId();
    q.setValue(stream.getStreamer().getId());
    const profileFollowingC = new ProfileFollowingServiceClient(
      MSConfig.API_URL
    );
    if (isFollowing) {
      profileFollowingC
        .unfollow(q, { authorization: `bearer ${user.get("sessionToken")}` })
        .then((s) => {
          setIsFollowing(false);
        });
    } else {
      profileFollowingC
        .follow(q, { authorization: `bearer ${user.get("sessionToken")}` })
        .then((s) => {
          setIsFollowing(true);
        });
    }
  };

  const onRedirectNFTDetail = (nft) => () => {
    navigation.navigate("NFTDetail", { id: nft.token_id });
  };

  const onRedirectProfile = () => {
    navigation.navigate("Profile", { id: stream.getStreamer().getId() });
  };

  const { assets } = AssetStore;

  if (!stream) return null;
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 45 }}
        showsVerticalScrollIndicator={false}
      >
        {isReplaying && !!stream.getVideourl() ? (
          <Replay
            source={stream.getVideourl()}
            initialPlaybackProps={{ isPaused: false }}
          />
        ) : isReplaying && !!stream.getHlsurl() ? (
          <Replay
            options={{
              controls: {
                includeControls: [
                  "playPauseButton",
                  "timeline",
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
            initialPlaybackProps={{ isPaused: false }}
          >
            <HlsjsVideoStreamer />
          </Replay>
        ) : null}
        {isDesktop && isChatExpanded ? (
          <TouchableOpacity
            style={[
              appStyles.center,
              { position: "absolute", top: 15, right: 15 },
              {
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: colors.primaryDarkColor,
              },
            ]}
            onPress={onOpenChat}
          >
            <Icon
              type={"entypo"}
              name={"chat"}
              color={colors.black}
              size={20}
            />
          </TouchableOpacity>
        ) : null}
        <ProfileItem
          isLive={stream.getLive()}
          isFollowing={isFollowing}
          follower={follower}
          name={stream.getName()}
          profile={stream.getStreamer()}
          category={stream.getCategory()}
          onCopy={onCopy(stream.getStreamer().getEthaddress())}
          onFollow={onFollow}
          onOpenDonate={onOpenDonate}
          onRedirectProfile={onRedirectProfile}
        />
        <Collapsible collapsed={!isDesktop ? isContentExpanded : false}>
          <View style={{ paddingHorizontal: 16 }}>
            <InfoItem
              category={stream.getCategory()}
              onCopy={onCopy(stream.getCategory().getContract())}
            />
          </View>
          {!isDesktop && !!user ? (
            <>
              <TouchableOpacity
                style={[appStyles.row, { paddingHorizontal: 16 }]}
                onPress={onOpenChat}
              >
                <Text
                  style={[
                    appStyles.title,
                    { marginVertical: 16, color: colors.white },
                  ]}
                >
                  {"STREAM CHAT"}
                </Text>
                <Icon
                  containerStyle={{ marginLeft: 15 }}
                  type={"ionicon"}
                  name={
                    !isChatExpanded
                      ? "chevron-up-outline"
                      : "chevron-down-outline"
                  }
                  color={colors.white}
                  size={20}
                />
              </TouchableOpacity>
              <Collapsible collapsed={isChatExpanded}>
                <View style={{ height: 600 }}>
                  <ChatBlock
                    title={"Chat"}
                    filter={{ streamId: stream.getId() }}
                    onOpenChat={onOpenChat}
                  />
                </View>
              </Collapsible>
            </>
          ) : null}
          <View style={[appStyles.wrap, { paddingHorizontal: 10 }]}>
            {assets.map((i, k) => (
              <NFTItem
                key={k}
                style={{ marginLeft: 15, marginTop: 15 }}
                nft={i}
                onPress={onRedirectNFTDetail(i)}
              />
            ))}
          </View>
        </Collapsible>
      </ScrollView>
      {isDesktop && !!user ? (
        <Animated.View style={chatStyle}>
          <ChatBlock
            title={"Chat"}
            filter={{ streamId: stream.getId() }}
            onOpenChat={onOpenChat}
          />
        </Animated.View>
      ) : null}
      <DonateModal
        visible={isDonateExpanded}
        profile={stream.getStreamer()}
        onClose={onOpenDonate}
        onSend={onDonate}
      />
    </View>
  );
});

export default StreamDetail;
