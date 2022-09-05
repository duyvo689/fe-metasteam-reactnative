import React, { useEffect, useState } from "react";
import { Platform, ScrollView, Text, View } from "react-native";
import { Button } from "native-base";
import { Icon } from "react-native-elements";
import CategoryStore from "stores/CategoryStore";
import TrendCategoryStore from "stores/TrendCategoryStore";
import { useMediaQuery } from "react-responsive";
import { appStyles } from "configs/styles";
import colors from "configs/colors";
import dimens from "configs/dimens";
import { observer } from "mobx-react";

import CategoryItem from "screens/items/CategoryItem";
import BlockTitle from "screens/titles/BlockTitle";

const Game = observer(({ navigation }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const titleFontSize = isMobile ? dimens.mediumText : dimens.xxxLargeText;
  const buttonProps = {
    bg: colors.black,
    _hover: { bg: colors.primaryAlphaDarkColor },
    _pressed: { bg: colors.black },
    _focus: { bg: colors.black },
  };

  const [genre, setGenre] = useState(0);

  useEffect(() => {
    CategoryStore.fetchCategory();
    TrendCategoryStore.fetchTrendCategory();
  }, []);

  const onChangeGenre = (genre) => () => {
    setGenre(genre);
  };

  const onRedirectCategoryDetail = (category) => () => {
    navigation.navigate("CategoryDetail", { id: category.getId() });
  };

  const { categories } = CategoryStore;
  const genres = require("assets/jsons/genres.json");

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 45 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          appStyles.row,
          { marginHorizontal: isMobile ? 16 : 24, marginVertical: isMobile ? 24 : 60 },
        ]}
      >
        {/* <Text style={[appStyles.title, {flex: 1, fontSize: titleFontSize}]}>{'Categories'}</Text> */}
        <BlockTitle title={"Categories"} />
        {/* <View style={[appStyles.row, { marginLeft: "auto" }]}>
          {!isMobile
            ? genres.map((i, k) => (
                <Button
                  key={k}
                  {...buttonProps}
                  h={35}
                  ml={15}
                  _text={{
                    color: genre === i?.id ? colors.primaryDarkColor : i?.color,
                  }}
                  rightIcon={
                    <Icon
                      type={i?.type}
                      name={i?.name}
                      color={
                        genre === i?.id ? colors.primaryDarkColor : i?.color
                      }
                      size={i?.size}
                    />
                  }
                  onPress={onChangeGenre(i?.id)}
                >
                  {i?.text}
                </Button>
              ))
            : null}
        </View> */}
      </View>
      <View
        style={[isMobile ? appStyles.gridCols2 : appStyles.gridCols6, { marginHorizontal: isMobile ? 16 : 24 }]}
      >
        {categories
          .filter((i) => genre < 0 || (genre > -1 && i.getGenre() === genre))
          .map((i, k) => (
            <CategoryItem
              key={k}
              style={{}}
              category={i}
              onPress={onRedirectCategoryDetail(i)}
            />
          ))}
      </View>
    </ScrollView>
  );
});

export default Game;
