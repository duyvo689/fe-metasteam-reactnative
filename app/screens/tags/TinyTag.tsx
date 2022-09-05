import React from "react";
import { Platform } from "react-native";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import { Chip } from "react-native-elements";
import colors from "../../configs/colors";
import dimens from "../../configs/dimens";

const TinyTag = observer(({ title }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";

  return (
    <Chip
      title={title}
      titleStyle={{
        fontFamily: "Inter-Medium",
        fontSize: dimens.tinyText,
        borderRadius: 10,
        backgroundColor: colors.black,
        paddingVertical: 4,
        paddingHorizontal: isMobile ? 8 : 12,
      }}
      containerStyle={{ maxWidth: "100%", marginTop: 4, marginRight: 4 }}
      buttonStyle={{ backgroundColor: colors.black, height: "auto" }}
    />
  );
});

export default TinyTag;
