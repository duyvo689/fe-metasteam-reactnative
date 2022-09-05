import React, { useState } from "react";
import { Platform, View } from "react-native";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import { Text, Tab, TabView } from "react-native-elements";
import { Heading } from "native-base";
import { appStyles } from "../../configs/styles";
import colors from "../../configs/colors";
import dimens from "../../configs/dimens";

type Props = {
  items: {
    title: string;
    content: JSX.Element;
  }[];
};

const BasicTab: React.FC<Props> = observer(({ items }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
  const [index, setIndex] = useState(0);

  return (
    <View>
      <View style={[appStyles.row, { marginBottom: 36 }]}>
        {items.map((item, _index) => (
          <Heading
            mr={7}
            key={"tab-title-" + _index}
            size={"md"}
            color={_index === index ? colors.primaryDarkColor : colors.white}
            onPress={() => setIndex(_index)}
          >
            {item.title}
          </Heading>
        ))}
      </View>
      {items.map((item, _index) => (
        <View
          key={"tab-content-" + _index}
          style={[{ display: index === _index ? "flex" : "none" }]}
        >
          {item.content}
        </View>
      ))}
    </View>
  );
});

export default BasicTab;
