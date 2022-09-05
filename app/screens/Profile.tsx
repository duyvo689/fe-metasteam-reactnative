import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { View, Text, ScrollView, Platform } from "react-native";
import { Heading, Alert } from "native-base";
import { Avatar, Icon, Image } from "react-native-elements";
import { appStyles } from "../configs/styles";
import { useMediaQuery } from "react-responsive";
import { Stream } from "../../pb/stream_pb";
import { Profile as ProfileBuffers } from "../../pb/profile_pb";
import colors from "../configs/colors";
import ProfileStore from "../stores/ProfileStore";
import StreamStore from "../stores/StreamStore";
import MediumTag from "./tags/MediumTag";
import ImageUtil from "../utils/ImageUtil";
import BasicTab from "./tabs/BasicTab";
import LiveItem from "./items/LiveItem";
import ChannelItem from "./items/ChannelItem";
import useFollowing from "../hooks/useFollowing";
import FollowButton from "./buttons/FollowButton";
import { useMoralis } from "react-moralis";

const BANNER_HEIGHT = {
  DESKTOP: 285,
};

const Profile = observer(({ navigation, route }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
  const [ethAddress, setEthAddress] = useState("");
  const [profile, setProfile] = useState<ProfileBuffers>();
  const { id } = route.params;
  const { profiles } = ProfileStore;
  const { streams } = StreamStore;
  const { user } = useMoralis();
  const { followers, isFollowing, setIsFollowing } = useFollowing(profile);

  const onRedirectStreamDetail = (stream: Stream) => () => {
    navigation.navigate("StreamDetail", { id: stream.getId() });
  };

  const onRedirectProfile = (stream: Stream) => {};

  useEffect(() => {
    ProfileStore.fetchProfile();
    StreamStore.fetchStream();
  }, []);

  useEffect(() => {
    setProfile(profiles.find((i) => i.getId() === id));
  }, [profiles]);

  useEffect(() => {
    if (!profile) return;
    setEthAddress(profile.getEthaddress());
  }, [profile]);

  if (!profile) return null;
  return (
    <ScrollView>
      <View>
        <Image
          width={"100%"}
          height={BANNER_HEIGHT.DESKTOP}
          style={{ width: "100%", height: BANNER_HEIGHT.DESKTOP }}
          source={{
            uri: ImageUtil.getImage("mock_banner_0"),
          }}
        />
      </View>
      <View style={{ padding: 24 }}>
        <View style={[appStyles.row, appStyles.topLeft, { marginBottom: 36 }]}>
          <Avatar
            containerStyle={{ marginRight: 44 }}
            icon={{ type: "ionicon", name: "person" }}
            rounded
            size={100}
            source={{ uri: profile?.getAvatarurl() }}
          />
          <View style={{ marginRight: 48 }}>
            <Heading color={colors.primaryDarkColor} size={"xl"} mb={4}>
              {profile?.getFirstname() + " " + profile?.getLastname()}
            </Heading>
            <Heading color={colors.white} size={"sm"}>
              {followers} followers
            </Heading>
          </View>
          <MediumTag
            title={
              ethAddress.substring(0, 9) +
              " ... " +
              ethAddress.substring(ethAddress.length - 4, ethAddress.length)
            }
            titleColor={colors.primaryDarkColor}
            containerMarginTop={8}
          />
          {id !== user?.id && (
            <FollowButton
              mt={2}
              ml={"auto"}
              profile={profile}
              isFollowing={isFollowing}
              setIsFollowing={setIsFollowing}
            />
          )}
        </View>
        <BasicTab
          items={[
            {
              title: "Stream",
              content: (
                <View style={[isMobile ? {} : appStyles.gridCols4]}>
                  {streams
                    .filter(
                      (i) =>
                        profile && profile.getId() === i.getStreamer().getId()
                    )
                    .map((i, k) => (
                      <>
                        {isMobile ? (
                          <LiveItem
                            key={k}
                            containerWidth={window.outerWidth - 48}
                            style={{ width: "100%", marginBottom: 16 }}
                            live={i}
                            onPress={onRedirectStreamDetail(i)}
                          />
                        ) : (
                          <ChannelItem
                            key={k}
                            channel={i}
                            style={{}}
                            onProfilePress={() => onRedirectProfile(i)}
                            onStreamDetailPress={onRedirectStreamDetail(i)}
                          />
                        )}
                      </>
                    ))}
                </View>
              ),
            },
            {
              title: "NFTs",
              content: (
                <Heading
                  color={colors.white}
                  size={"sm"}
                  borderWidth={2}
                  borderColor={colors.white}
                  p={2}
                  rounded={10}
                >
                  Coming soon
                </Heading>
              ),
            },
            {
              title: "About",
              content: (
                <Text style={{ color: colors.white }}>
                  {profile?.getDescription()}
                </Text>
              ),
            },
          ]}
        />
      </View>
    </ScrollView>
  );
});

export default Profile;
