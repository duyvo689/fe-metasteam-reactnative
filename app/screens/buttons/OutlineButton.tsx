import React from "react";
import { Platform, StyleProp, ViewStyle } from "react-native";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import colors from "../../configs/colors";
import dimens from "../../configs/dimens";
import { Profile, ProfileId } from "../../../pb/profile_pb";
import { Button, IButtonProps } from "native-base";
import { Avatar, Badge, Icon } from "react-native-elements";
import { ProfileFollowingServiceClient } from "../../../pb/Profile_followingServiceClientPb";
import MSConfig from "../../configs/MSConfig";
import { useMoralis } from "react-moralis";

interface IProps extends IButtonProps {}

const OutlineButton: React.FC<IProps> = (props) => {
  const {
    px,
    py,
    borderRadius,
    borderWidth,
    borderColor,
    backgroundColor,
    _text,
    _hover,
    ...buttonProps
  } = props;
  return (
    <Button
      px={px || 6}
      py={py || 2}
      borderRadius={borderRadius || 10}
      borderWidth={borderWidth || 2}
      borderColor={borderColor || colors.primaryDarkColor}
      backgroundColor={backgroundColor || "transparent"}
      _text={{ ..._text, fontWeight: "bold", color: colors.primaryDarkColor }}
      _hover={{
        ..._hover,
        backgroundColor: colors.primaryDarkColor,
        _text: { color: colors.black },
      }}
      {...buttonProps}
    >
      {props.children}
    </Button>
  );
};

export default OutlineButton;
