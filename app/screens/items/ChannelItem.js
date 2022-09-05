import React, { useRef } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { Badge, Heading } from "native-base";
import { Avatar, Chip, Icon, Image } from "react-native-elements";
import { useDimensions } from "@react-native-community/hooks";
import { useHover } from "react-native-web-hooks";
import { useMediaQuery } from "react-responsive";
import { appStyles } from "../../configs/styles";
import colors from "../../configs/colors";

import TinyTag from "../tags/TinyTag";
import dimens from "../../configs/dimens";

const ChannelItem = ({
  style,
  channel,
  onStreamDetailPress,
  onProfilePress,
}) => {
  const titleRef = useRef();
  const nameRef = useRef();
  const viewRef = useRef();
  const isTitleHovered = useHover(titleRef);
  const isNameHovered = useHover(nameRef);
  const isThumbnailHovered = useHover(viewRef);
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const { width: widthScreen } = useDimensions().window;
  const width = (widthScreen - 240 - 95) / 4;
  const height = (213 * width) / 378;

  return (
    <View style={[style]}>
      <View
        ref={viewRef}
        style={[
          appStyles.center,
          { height, position: "relative", transition: "transform 300ms ease" },
          isThumbnailHovered ? { transform: [{ scale: 1.025 }] } : {},
        ]}
      >
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: colors.black,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onPress={(e) => {
            typeof onStreamDetailPress === "function" && onStreamDetailPress();
          }}
        >
          {channel.getScreenshoturl() ? (
            <Image
              containerStyle={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              style={{ width: "100%", height: "auto", borderRadius: 10 }}
              source={{ uri: channel.getScreenshoturl() }}
              height={undefined}
              width={undefined}
            />
          ) : null}
        </TouchableOpacity>
        <Icon
          type={"material"}
          name={"play-arrow"}
          color={colors.white}
          size={60}
          onPress={() => {
            typeof onStreamDetailPress === "function" && onStreamDetailPress();
          }}
          tvParallaxProperties={undefined}
        />
        {channel.getLive() ? (
          <Badge
            bg={colors.red}
            _text={{ color: colors.white, fontFamily: "Montserrat-Medium" }}
            position={"absolute"}
            top={16}
            left={16}
          >
            {"LIVE"}
          </Badge>
        ) : null}
      </View>
      <View
        style={[appStyles.row, { alignItems: "flex-start", marginTop: 15 }]}
      >
        <Avatar
          icon={{ type: "ionicon", name: "person" }}
          rounded
          size={40}
          source={{ uri: channel.getStreamer().getAvatarurl() }}
          onPress={() => {
            typeof onProfilePress === "function" && onProfilePress();
          }}
        />
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Heading
            ref={titleRef}
            color={isTitleHovered ? colors.primaryDarkColor : colors.white}
            size={"sm"}
            numberOfLines={1}
            ellipsizeMode={"tail"}
            onPress={() => {
              typeof onStreamDetailPress === "function" &&
                onStreamDetailPress();
            }}
          >
            {channel.getName()}
          </Heading>
          <Text
            ref={nameRef}
            style={[
              appStyles.text,
              {
                marginTop: 6,
                fontSize: dimens.smallText,
                color: isNameHovered ? colors.primaryDarkColor : colors.white,
              },
            ]}
            numberOfLines={1}
            ellipsizeMode={"tail"}
            onPress={() => {
              typeof onProfilePress === "function" && onProfilePress();
            }}
          >{`${channel.getStreamer().getFirstname()} ${channel
            .getStreamer()
            .getLastname()}`}</Text>
          <Text
            style={[
              appStyles.text,
              {
                marginTop: 6,
                fontSize: dimens.smallText,
              },
            ]}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >{`${channel.getCategory().getName()}`}</Text>
          <View style={[appStyles.row, appStyles.wrap, { marginTop: 6 }]}>
            {channel
              .getCategory()
              .getTagsList()
              .slice(0, 2)
              .map((i, k) => (
                <TinyTag key={"tag-" + k} title={i} />
              ))}
          </View>
        </View>
        <Icon
          type={"ionicon"}
          name={"ellipsis-vertical"}
          color={colors.white}
          size={15}
          tvParallaxProperties={undefined}
        />
      </View>
    </View>
  );
};

export default ChannelItem;
