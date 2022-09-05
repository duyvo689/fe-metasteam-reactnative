import React, { useEffect } from "react";
import { Platform, ScrollView, Text, View } from "react-native";
import { Button } from "native-base";
import BannerCategoryStore from "stores/BannerCategoryStore";
import CategoryStore from "stores/CategoryStore";
import ProfileStore from "stores/ProfileStore";
import StreamStore from "stores/StreamStore";
import TrendCategoryStore from "stores/TrendCategoryStore";
import { useDimensions } from "@react-native-community/hooks";
import { useMediaQuery } from "react-responsive";
import { LinearGradient } from "expo-linear-gradient";
import { Video } from "expo-av";
import { appStyles } from "configs/styles";
import colors from "configs/colors";
import dimens from "configs/dimens";
import { observer } from "mobx-react";
import LiveChannelsBlock from "screens/blocks/LiveChannelsBlock";
import CategoriesBlock from "screens/blocks/CategoriesBlock";

const Home = observer(({ navigation }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const { width: widthScreen } = useDimensions().window;
  const videoWidth = widthScreen - (isDesktop ? 240 : 0);
  const videoHeight = (1080 * videoWidth) / 1920 - (isDesktop ? 240 : 0);
  const titleStyle = isMobile
    ? { margin: 16 }
    : {
        marginHorizontal: 24,
        marginTop: 64,
        marginBottom: 24,
      };

  useEffect(() => {
    BannerCategoryStore.fetchBannerCategory();
    CategoryStore.fetchCategory();
    ProfileStore.fetchProfile();
    StreamStore.fetchStream();
    TrendCategoryStore.fetchTrendCategory();
  }, []);

  const onRedirectCategoryDetail = () => {
    navigation.navigate("CategoryDetail", {
      id: bannerCategories[index].getId(),
    });
  };

  const { bannerCategories } = BannerCategoryStore;
  const index = Math.floor(Math.random() * 10) % 2;

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 45 }}
      showsVerticalScrollIndicator={false}
    >
      {bannerCategories[index] ? (
        <View style={{ width: videoWidth, height: videoHeight }}>
          <Video
            style={{ width: videoWidth, height: videoHeight }}
            resizeMode={Video.RESIZE_MODE_COVER}
            shouldPlay={true}
            isLooping={true}
            isMuted={true}
            source={{
              uri: bannerCategories[index].getCovervideourl(),
            }}
          />
          <LinearGradient
            style={[
              {
                position: "absolute",
                top: -1,
                left: -1,
                right: -1,
                bottom: -1,
              },
              {
                justifyContent: "flex-end",
                paddingHorizontal: isDesktop ? 24 : 16,
                paddingVertical: isDesktop ? 24 : 16,
              },
            ]}
            colors={["transparent", colors.backgroundDarkColor]}
          >
            <Text
              style={[
                appStyles.title,
                !isMobile
                  ? { fontSize: dimens.yottaLargeText, maxWidth: "50%" }
                  : {},
                {},
              ]}
            >
              {bannerCategories[index].getName()}
            </Text>
            <Text
              style={[
                appStyles.text,
                {
                  marginTop: isMobile ? 12 : 20,
                  fontSize: isMobile ? dimens.tinyText : dimens.mediumText,
                },
                isMobile ? {} : { maxWidth: "75%" },
              ]}
            >
              {bannerCategories[index].getDescription()}
            </Text>
            <View style={[appStyles.row, { marginTop: isMobile ? 12 : 20 }]}>
              <Button
                onPress={onRedirectCategoryDetail}
                _text={{
                  fontSize: isMobile ? dimens.tinyText : dimens.normalText,
                }}
                style={{
                  paddingVertical: isMobile ? 8 : 12,
                  paddingHorizontal: isMobile ? 16 : 24,
                }}
              >
                {"JOIN THE FIGHT"}
              </Button>
            </View>
          </LinearGradient>
        </View>
      ) : null}
      <LiveChannelsBlock
        style={titleStyle}
        contentStyle={
          isMobile ? {} : { marginHorizontal: 24 }
        }
        title={"New Streams"}
        navigation={navigation}
      />
      <CategoriesBlock
        style={titleStyle}
        contentStyle={
          isMobile ? {} : { marginHorizontal: 24 }
        }
        title={"Trending Games"}
        navigation={navigation}
      />
    </ScrollView>
  );
});

export default Home;
