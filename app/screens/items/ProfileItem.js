import React, { useRef } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { Button } from "native-base";
import { Avatar, Badge, Chip, Icon } from "react-native-elements";
import FormatUtil from "utils/FormatUtil";
import { useMediaQuery } from "react-responsive";
import { useMoralis } from "react-moralis";
import { appStyles } from "configs/styles";
import colors from "configs/colors";
import { useHover } from "react-native-web-hooks";

import TinyTag from "screens/tags/TinyTag";
import FollowButton from "screens/buttons/FollowButton";

const ProfileItem = ({
  style,
  isLive,
  isFollowing,
  follower,
  name,
  profile,
  category,
  onCopy,
  onFollow,
  onOpenDonate,
  onRedirectProfile,
}) => {
  const nameRef = useRef();
  const isNameHovered = useHover(nameRef);
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const buttonProps = {
    bg: colors.black,
    _hover: { bg: colors.primaryAlphaDarkColor },
    _pressed: { bg: colors.black },
    _focus: { bg: colors.black },
  };

  const { user } = useMoralis();

  if (isMobile) {
    return (
      <View style={[{ padding: 16 }, style]}>
        <View style={appStyles.row}>
          <View style={{ flex: 1, marginRight: 16 }}>
            <Text style={appStyles.title}>{name}</Text>
            <Text
              style={[
                appStyles.text,
                { color: colors.secondaryTextDarkColor, marginTop: 5 },
              ]}
            >
              {category.getName()}
            </Text>
          </View>
          <Button
            leftIcon={
              <Icon
                type={"material-community"}
                name={"hand-heart"}
                color={colors.black}
                size={20}
              />
            }
            onPress={onOpenDonate}
          >
            {"Donate"}
          </Button>
        </View>
        <View style={[appStyles.row, { marginTop: 16 }]}>
          <View style={appStyles.center}>
            <Avatar
              rounded
              size={"small"}
              source={{ uri: profile.getAvatarurl() }}
              onPress={onRedirectProfile}
            />
            {isLive ? (
              <Badge
                containerStyle={{ marginTop: 5 }}
                badgeStyle={{ backgroundColor: colors.red, padding: 5 }}
                value={"Live"}
              />
            ) : null}
          </View>
          <View style={{ flex: 1, marginLeft: 16 }}>
            <View style={appStyles.row}>
              <Text
                style={[appStyles.text, {}]}
              >{`${profile.getFirstname()} ${profile.getLastname()}`}</Text>
              <TouchableOpacity
                style={[appStyles.row, { marginLeft: 16 }]}
                onPress={onCopy}
              >
                <Text
                  style={[
                    appStyles.text,
                    { color: colors.secondaryTextDarkColor },
                  ]}
                >
                  {"Address: "}
                </Text>
                <Text
                  style={[
                    appStyles.text,
                    { color: colors.secondaryTextDarkColor },
                  ]}
                >
                  {FormatUtil.formatAddress(profile.getEthaddress())}
                </Text>
                <Icon
                  containerStyle={{ marginLeft: 5 }}
                  type={"ionicon"}
                  name={"copy-outline"}
                  color={colors.secondaryTextDarkColor}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={[appStyles.row, appStyles.wrap]}>
              {category.getTagsList().map((i, k) => (
                <TinyTag key={k} title={i} />
              ))}
            </View>
            <View style={[appStyles.row, { marginTop: 5 }]}>
              <Text style={appStyles.text}>
                <Text style={[appStyles.text, {}]}>{follower}</Text>
                {" follower"}
              </Text>
              {!!user ? (
                <FollowButton
                  {...buttonProps}
                  ml={16}
                  profile={profile}
                  isFollowing={isFollowing}
                  setIsFollowing={onFollow}
                  _text={{ color: colors.primaryDarkColor }}
                />
              ) : null}
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[appStyles.row, { padding: 16 }, style]}>
        <View>
          <Avatar
            containerStyle={{
              borderWidth: 2,
              borderColor: colors.primaryDarkColor,
            }}
            rounded
            size={"large"}
            source={{ uri: profile.getAvatarurl() }}
            onPress={onRedirectProfile}
          />
          {isLive ? (
            <Badge
              containerStyle={{
                alignSelf: "center",
                position: "absolute",
                bottom: -5,
              }}
              badgeStyle={{ backgroundColor: colors.red, padding: 10 }}
              textStyle={{}}
              value={"Live"}
            />
          ) : null}
        </View>
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <View style={appStyles.row}>
            <Text style={appStyles.title}>{name}</Text>
            <Text style={[appStyles.text, { marginLeft: 16 }]}>
              {category.getName()}
            </Text>
          </View>
          <Text
            ref={nameRef}
            style={[
              appStyles.text,
              {
                marginTop: 5,
                color: isNameHovered ? colors.primaryDarkColor : colors.white,
              },
            ]}
            onPress={onRedirectProfile}
          >{`${profile.getFirstname()} ${profile.getLastname()}`}</Text>
          <View style={appStyles.row}>
            <Text style={appStyles.text}>
              <Text style={[appStyles.text, {}]}>{follower}</Text>
              {" follower"}
            </Text>
            <TouchableOpacity
              style={[appStyles.row, { marginLeft: 16 }]}
              onPress={onCopy}
            >
              <Text
                style={[
                  appStyles.text,
                  { color: colors.secondaryTextDarkColor },
                ]}
              >
                {"Address: "}
              </Text>
              <Text
                style={[
                  appStyles.text,
                  { color: colors.secondaryTextDarkColor },
                ]}
              >
                {FormatUtil.formatAddress(profile.getEthaddress())}
              </Text>
              <Icon
                containerStyle={{ marginLeft: 5 }}
                type={"ionicon"}
                name={"copy-outline"}
                color={colors.secondaryTextDarkColor}
                size={20}
              />
            </TouchableOpacity>
            {!!user ? (
              <FollowButton
                {...buttonProps}
                ml={16}
                profile={profile}
                isFollowing={isFollowing}
                setIsFollowing={onFollow}
                _text={{ color: colors.primaryDarkColor }}
              />
            ) : null}
          </View>
        </View>
        {!!user ? (
          <Button
            leftIcon={
              <Icon
                type={"material-community"}
                name={"hand-heart"}
                color={colors.black}
                size={20}
              />
            }
            onPress={onOpenDonate}
          >
            {"Donate"}
          </Button>
        ) : null}
      </View>
    );
  }
};

export default ProfileItem;
