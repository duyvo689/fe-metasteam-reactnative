import React from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import CategoryStore from "stores/CategoryStore";
import { useMediaQuery } from "react-responsive";
import { appStyles } from "configs/styles";
import colors from "configs/colors";
import dimens from "configs/dimens";
import { observer } from "mobx-react";

import CategoryItem from "screens/items/CategoryItem";
import BlockTitle from "screens/titles/BlockTitle";

const CategoriesBlock = observer(
  ({ style, contentStyle, title, filter, navigation }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 }) || Platform.OS !== "web";
    const isDesktop = useMediaQuery({ minWidth: 992 });

    const onRedirectCategoryDetail = (category) => () => {
      navigation.navigate("CategoryDetail", { id: category.getId() });
    };

    const { categories } = CategoryStore;

    return (
      <>
        <BlockTitle style={style} title={title} />
        {isDesktop ? (
          <View style={[appStyles.gridCols6, contentStyle]}>
            {categories.map((i, k) => (
              <CategoryItem
                key={k}
                category={i}
                onPress={onRedirectCategoryDetail(i)}
              />
            ))}
          </View>
        ) : (
          <ScrollView
            style={contentStyle}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((i, k) => (
              <CategoryItem
                key={k}
                style={{
                  marginLeft: 16,
                }}
                category={i}
                onPress={onRedirectCategoryDetail(i)}
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

export default CategoriesBlock;
