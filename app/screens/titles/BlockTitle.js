import React from "react";
import { Platform, Text, View } from "react-native";
import { useMediaQuery } from "react-responsive";
import { appStyles } from "configs/styles";
import dimens from "configs/dimens";
import { observer } from "mobx-react";

const BlockTitle = observer(({ style, title }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
  const titleFontSize = isMobile ? dimens.mediumText : dimens.teraLargeText;

  return (
    <>
      {title ? (
        <View style={[appStyles.row, style]}>
          <Text style={[appStyles.title, { flex: 1, fontSize: titleFontSize }]}>
            {title}
          </Text>
        </View>
      ) : null}
    </>
  );
});

export default BlockTitle;
