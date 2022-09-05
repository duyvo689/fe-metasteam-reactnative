import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { View, Text, ScrollView, Platform } from "react-native";
import { Heading, Input, Select } from "native-base";
import { Avatar, Icon, Image } from "react-native-elements";
import { appStyles } from "../configs/styles";
import { useMediaQuery } from "react-responsive";
import { Stream } from "../../pb/stream_pb";
import StreamStore from "../stores/StreamStore";
import colors from "../configs/colors";
import AppStore from "../stores/AppStore";
import { useMoralis } from "react-moralis";
import CategoryStore from "../stores/CategoryStore";
import OutlineButton from "./buttons/OutlineButton";
import { StreamServiceClient } from "../../pb/StreamServiceClientPb";
import MSConfig from "../configs/MSConfig";

const style = {
  px4: { paddingHorizontal: 16 },
  py4: { paddingVertical: 16 },
  px6: { paddingHorizontal: 24 },
  py6: { paddingVertical: 24 },
  sectionTitle: {
    paddingHorizontal: 16,
    opacity: 0.5,
  },
  sectionContainer: [
    {
      paddingVertical: 16,
      paddingHorizontal: 24,
      marginBottom: 24,
      width: "100%",
      backgroundColor: colors.contentBackgroundDarkColor,
    },
  ],
};

const VideoDetail = ({ navigation, route }) => {
  const { user } = useMoralis();
  const { categories } = CategoryStore;
  const { streams } = StreamStore;

  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const [stream, setStream] = useState<Stream>(null);
  const [streamObject, setStreamObject] = useState<Stream.AsObject>(null);

  useEffect(() => {
    CategoryStore.fetchCategory();
    StreamStore.fetchStream(() => {
      const _stream = streams.find(
        (item) =>
          item.getId() === route.params?.id &&
          item.getStreamer().getId() === user?.id
      );
      console.log("_stream", _stream);

      if (_stream) {
        setStream(_stream);
        setStreamObject(_stream.toObject());
      }
    });
  }, [route, user]);

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

  const onSave = () => {
    if (streamObject.name !== stream.getName()) {
      stream.setName(streamObject.name);
    }

    if (streamObject.invisible !== stream.getInvisible()) {
      stream.setInvisible(streamObject.invisible);
    }

    if (streamObject?.category?.id !== stream.getCategory()?.getId()) {
      const _category = categories.find(
        (item) => item.getId() === streamObject?.category?.id
      );
      if (_category) {
        stream.setCategory(_category);
      }
    }

    const streamC = new StreamServiceClient(MSConfig.API_URL);
    streamC
      .update(stream, { authorization: `bearer ${user.get("sessionToken")}` })
      .then((res) => {
        console.log(res);
      });
  };

  const updateStreamObject = (key: keyof Stream.AsObject, value: any) => {
    setStreamObject({ ...streamObject, [key]: value });
    setIsSaveButtonDisabled(false);
  };

  if (!streamObject) return null;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 44 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={[appStyles.row, { margin: 24 }]}>
        <Icon
          type={"material"}
          name={"video-settings"}
          color={colors.primaryDarkColor}
          size={25}
          tvParallaxProperties={undefined}
        />
        <Text style={[appStyles.title, { marginLeft: 16 }]}>
          {"Video Detail"}
        </Text>
      </View>
      <View
        style={[
          style.px6,
          {
            width: "70%",
          },
        ]}
      >
        <View style={[style.sectionContainer]}>
          <Text style={[appStyles.text, style.sectionTitle]}>{"Title"}</Text>
          <Input
            mt={2}
            px={4}
            size={"xl"}
            placeholder={"Title stream..."}
            value={streamObject.name}
            onChangeText={(text) => updateStreamObject("name", text)}
          />
        </View>
        <View style={[style.sectionContainer]}>
          <Text style={[appStyles.text, style.sectionTitle]}>{"Game"}</Text>
          <Select
            mt={2}
            px={15}
            size={"xl"}
            placeholder={"Select game"}
            selectedValue={streamObject?.category?.id}
            onValueChange={(value) => {
              if (!streamObject.category) return;
              setStreamObject({
                ...streamObject,
                category: {
                  ...streamObject.category,
                  id: value,
                },
              });
            }}
          >
            {categories.map((i, k) => (
              <Select.Item key={k} label={i.getName()} value={i.getId()} />
            ))}
          </Select>
        </View>
        <View style={[style.sectionContainer]}>
          <Text style={[appStyles.text, style.sectionTitle]}>
            {"Visibility"}
          </Text>
          <Select
            mt={2}
            px={15}
            size={"xl"}
            placeholder={"Select game"}
            selectedValue={streamObject.invisible ? "true" : ""}
            onValueChange={(value) =>
              setStreamObject({ ...streamObject, invisible: value === "true" })
            }
          >
            <Select.Item label={"Public"} value={""} />
            <Select.Item label={"Private"} value={"true"} />
          </Select>
        </View>
        {/* <Heading color={colors.white} size="md">
          {"Thumbnail"}
        </Heading> */}
        <View style={[appStyles.row]}>
          <OutlineButton
            ml={"auto"}
            onPress={onSave}
            isDisabled={isSaveButtonDisabled}
          >
            {"Save"}
          </OutlineButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default VideoDetail;
