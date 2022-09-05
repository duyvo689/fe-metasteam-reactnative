import React from "react";
import { Platform, StyleSheet } from "react-native";
import colors from "configs/colors";
import dimens from "configs/dimens";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  topLeft: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  gridCols2: {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    gap: 20,
  },
  gridCols4: {
    display: "grid",
    gridTemplateColumns: "repeat(4,minmax(0,1fr))",
    gap: 20,
  },
  gridCols6: {
    display: "grid",
    gridTemplateColumns: "repeat(6,minmax(0,1fr))",
    gap: 20,
  },
  action: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: Platform.OS === "web" ? 25 : 20,
    height: Platform.OS === "web" ? 25 : 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: dimens.largeText,
    color: colors.primaryDarkColor,
    fontFamily: "Inter-Bold",
  },
  label: {
    fontSize: dimens.normalText,
    color: colors.primaryTextDarkColor,
    fontFamily: "Inter-Regular",
  },
  text: {
    fontSize: dimens.normalText,
    color: colors.primaryTextDarkColor,
    fontFamily: "Inter-Regular",
  },
  subtext: {
    fontSize: dimens.smallText,
    color: colors.secondaryTextDarkColor,
    fontFamily: "Inter-Light",
  },
  caption: {
    fontSize: dimens.tinyText,
    color: colors.secondaryTextDarkColor,
    fontFamily: "Inter-Light",
  },
  pack: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  property: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.contentAlphaDarkColor,
    borderWidth: 1,
    borderColor: colors.borderDarkColor,
    borderRadius: 10,
  },
  circle: {
    borderRadius: 20,
    backgroundColor: colors.primaryBetaDarkColor,
  },
  round: {
    borderRadius: 10,
    backgroundColor: colors.roundedDarkColor,
  },
});
