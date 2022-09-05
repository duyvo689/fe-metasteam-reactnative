import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Select } from "native-base";
import { Icon, Image } from "react-native-elements";
import MSConfig from "configs/MSConfig";
import AppStore from "stores/AppStore";
import { useMoralis } from "react-moralis";
import { appStyles } from "configs/styles";
import colors from "configs/colors";
import dimens from "configs/dimens";

import { StreamId, StreamQuery } from "pb/stream_pb";
import { StreamServiceClient } from "pb/StreamServiceClientPb";

const ManageContent = ({ navigation, route }) => {
  const [contents, setContents] = useState([]);
  const { user } = useMoralis();

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
    if (user) {
      const q = new StreamQuery();
      q.setProfileid(user.id);
      const streamC = new StreamServiceClient(MSConfig.API_URL);
      streamC.query(q, null).then((s) => {
        setContents(s.getValuesList());
      });
    }
  }, [user]);

  const onRemove = (stream) => () => {
    const q = new StreamId();
    q.setValue(stream.getId());
    const streamC = new StreamServiceClient(MSConfig.API_URL);
    streamC
      .delete(q, { authorization: `bearer ${user.get("sessionToken")}` })
      .then((s) => {
        const q = new StreamQuery();
        q.setProfileid(user.id);
        const streamC = new StreamServiceClient(MSConfig.API_URL);
        streamC.query(q, null).then((s) => {
          setContents(s.getValuesList());
        });
      });
  };

  const onVisible = (stream) => (value) => {
    stream.setInvisible(value === "true");
    const streamC = new StreamServiceClient(MSConfig.API_URL);
    streamC
      .update(stream, { authorization: `bearer ${user.get("sessionToken")}` })
      .then((s) => {
        const q = new StreamQuery();
        q.setProfileid(user.id);
        const streamC = new StreamServiceClient(MSConfig.API_URL);
        streamC.query(q, null).then((s) => {
          setContents(s.getValuesList());
        });
      });
  };

  const onRedirectVideoDetail = (stream) => {
    navigation.navigate("VideoDetail", { id: stream.getId() });
  };

  if (!user) return null;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 45 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={[appStyles.row, { margin: 24 }]}>
        <Icon
          type={"material"}
          name={"edit"}
          color={colors.primaryDarkColor}
          size={25}
        />
        <Text style={[appStyles.title, { marginLeft: 15 }]}>
          {"Manage content"}
        </Text>
      </View>
      <View
        style={[
          appStyles.row,
          { padding: 15, backgroundColor: colors.contentBackgroundDarkColor },
          { marginHorizontal: 25 },
        ]}
      >
        <Text style={[appStyles.text, { flex: 0.5 }]}>{"Video"}</Text>
        <Text style={[appStyles.text, { flex: 0.15, textAlign: "center" }]}>
          {"Visibility"}
        </Text>
        <Text style={[appStyles.text, { flex: 0.15, textAlign: "center" }]}>
          {"Date"}
        </Text>
        <Text style={[appStyles.text, { flex: 0.1, textAlign: "center" }]}>
          {"Views"}
        </Text>
        <Text style={[appStyles.text, { flex: 0.1, textAlign: "center" }]}>
          {"Like"}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.contentBackgroundDarkColor,
          marginHorizontal: 25,
        }}
      >
        {contents.map((i, k) => (
          <View
            key={k}
            style={{
              flexDirection: "row",
              padding: 15,
              borderTopWidth: 1,
              borderColor: colors.white,
            }}
          >
            <View style={{ flex: 0.5, flexDirection: "row" }}>
              <Image
                style={{ width: 197, height: 113 }}
                source={{ uri: i.getScreenshoturl() }}
                onPress={() => onRedirectVideoDetail(i)}
              />
              <View style={{ flex: 1, marginLeft: 45, marginRight: 15 }}>
                <Text style={[appStyles.text, { fontSize: dimens.xLargeText }]}>
                  {i.getName()}
                </Text>
                <Text style={[appStyles.text, { opacity: 0.5, marginTop: 5 }]}>
                  {i.getCategory().getName()}
                </Text>
              </View>
            </View>
            <View style={{ flex: 0.15 }}>
              <View style={[appStyles.row, { alignSelf: "center" }]}>
                <Icon
                  type={"ionicon"}
                  name={i.getInvisible() ? "eye-off" : "eye"}
                  color={colors.primaryDarkColor}
                  size={20}
                />
                <Select
                  ml={2}
                  w={"80pt"}
                  size={"lg"}
                  selectedValue={i.getInvisible().toString()}
                  placeholder={"Choose visibility"}
                  onValueChange={onVisible(i)}
                >
                  <Select.Item label={"Public"} value={"false"} />
                  <Select.Item label={"Private"} value={"true"} />
                </Select>
              </View>
            </View>
            <Text style={[appStyles.text, { flex: 0.15, textAlign: "center" }]}>
              {new Date(i.getCreatedat()).toLocaleDateString(undefined, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Text>
            <Text style={[appStyles.text, { flex: 0.1, textAlign: "center" }]}>
              {"0"}
            </Text>
            <Text style={[appStyles.text, { flex: 0.1, textAlign: "center" }]}>
              {"0"}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ManageContent;
