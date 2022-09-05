import React from "react";
import { Platform, StyleProp, ViewStyle } from "react-native";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import { Chip } from "react-native-elements";
import colors from "../../configs/colors";
import dimens from "../../configs/dimens";

type Props = {
  title: string;
  titleColor?: string;
  containerMarginTop?: number;
};

const MediumTag: React.FC<Props> = observer(
  ({ title, titleColor, containerMarginTop }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";

    return (
      <Chip
        title={title}
        titleStyle={{
          color: titleColor || colors.white,
          fontWeight: "bold",
          paddingHorizontal: 24,
          paddingVertical: 8,
        }}
        containerStyle={{
          marginTop: containerMarginTop || 0,
        }}
        buttonStyle={{ backgroundColor: colors.black, height: "auto" }}
      />
    );
  }
);

export default MediumTag;
