import React from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import StreamStore from "stores/StreamStore";
import { useMediaQuery } from "react-responsive";
import { appStyles } from "configs/styles";
import colors from "configs/colors";
import dimens from "configs/dimens";
import { observer } from "mobx-react";

import ChannelItem from "screens/items/ChannelItem";
import LiveItem from "screens/items/LiveItem";
import BlockTitle from "screens/titles/BlockTitle";

const LiveChannelsBlock = observer(
  ({ style, contentStyle, title, filter, navigation }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const titleFontSize = isMobile ? dimens.mediumText : dimens.zettaLargeText;

    const onRedirectStreamDetail = (stream) => {
      navigation.navigate("StreamDetail", { id: stream.getId() });
    };

    const onRedirectProfile = (stream) => {
      navigation.navigate("Profile", { id: stream.getStreamer().getId() });
    };

    const { streams } = StreamStore;

    return (
      <>
        <BlockTitle style={style} title={title} />
        {isDesktop ? (
          <View style={[appStyles.gridCols4, contentStyle]}>
            {streams
              .filter((i) =>
                filter ? i.getCategory().getId() === filter.categoryId : true && !i.getInvisible()
              )
              .slice(0, 8)
              .map((i, k) => (
                <ChannelItem
                  key={k}
                  channel={i}
                  onProfilePress={() => onRedirectProfile(i)}
                  onStreamDetailPress={() => onRedirectStreamDetail(i)}
                />
              ))}
          </View>
        ) : (
          <ScrollView
            style={contentStyle}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {streams
              .filter((i) =>
                filter ? i.getCategory().getId() === filter.categoryId : true && !i.getInvisible()
              )
              .slice(0, 8)
              .map((i, k) => (
                <LiveItem
                  key={k}
                  style={{ marginLeft: 16 }}
                  live={i}
                  onPress={() => onRedirectStreamDetail(i)}
                />
              ))}
            <TouchableOpacity
              style={[
                appStyles.action,
                { backgroundColor: colors.primaryDarkColor, borderRadius: 20 },
                { marginHorizontal: 15, alignSelf: "center" },
              ]}
            >
              <Icon
                type={"ionicon"}
                name={"arrow-forward-outline"}
                color={colors.black}
                size={20}
              />
            </TouchableOpacity>
          </ScrollView>
        )}
      </>
    );
  }
);

export default LiveChannelsBlock;
