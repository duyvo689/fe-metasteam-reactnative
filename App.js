import React, { useEffect, useState } from "react";
import MSConfig from "configs/MSConfig";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { ThemeProvider } from "react-native-elements";
import { MoralisProvider } from "react-moralis";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { helpers } from "configs/themes";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

import { RootTabOrDrawer } from "./Router";

const App = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          "Inter-Black": require("assets/fonts/Inter-Black.ttf"),
          "Inter-Bold": require("assets/fonts/Inter-Bold.ttf"),
          "Inter-Medium": require("assets/fonts/Inter-Medium.ttf"),
          "Inter-Regular": require("assets/fonts/Inter-Regular.ttf"),
          "Inter-Light": require("assets/fonts/Inter-Light.ttf"),
          "Inter-Thin": require("assets/fonts/Inter-Thin.ttf"),
          "Montserrat-Bold": require("assets/fonts/Montserrat-Bold.ttf"),
          "Montserrat-Medium": require("assets/fonts/Montserrat-Medium.ttf"),
          "Montserrat-Regular": require("assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-Light": require("assets/fonts/Montserrat-Light.ttf"),
          "Montserrat-Thin": require("assets/fonts/Montserrat-Thin.ttf"),
        });
      } catch (e) {
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const onReady = () => {
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  const onStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
    }
    routeNameRef.current = currentRouteName;
  };

  if (ready) {
    const theme = "dark";
    const linking = {
      config: {
        screens: {
          Explore: {
            initialRouteName: "Home",
            screens: {
              Home: "/explore/home",
              StreamDetail: "/explore/stream-detail",
              CategoryDetail: "/explore/category-detail",
              NFTDetail: "/explore/nft-detail",
              Profile: "/explore/profile",
            },
          },
          Principle: {
            initialRouteName: "Game",
            screens: {
              Game: "/principle/game",
              CategoryDetail: "/principle/category-detail",
              StreamDetail: "/principle/stream-detail",
              NFTDetail: "/principle/nft-detail",
            },
          },
          Trending: "trending",
          Notification: "notification",
          // Dashboard: 'dashboard', // TODO: Uncomment when Dashboard is ready
          ManageContent: "manage-content",
          StreamManager: "stream-manager",
          ManageAsset: "manage-asset",
          Setting: "setting",
          VideoDetail: "video-detail",
        },
      },
    };
    return (
      <MoralisProvider
        serverUrl={MSConfig.MORALIS_SERVER_URL}
        appId={MSConfig.MORALIS_APP_ID}
      >
        <NativeBaseProvider theme={extendTheme(helpers("base", theme))}>
          <ThemeProvider theme={helpers("elements", theme)}>
            <StatusBar style={"auto"} />
            <NavigationContainer
              ref={navigationRef}
              onReady={onReady}
              onStateChange={onStateChange}
              linking={linking}
              theme={helpers("navigation", theme)}
              initialRouteName={"Home"}
            >
              <RootTabOrDrawer />
            </NavigationContainer>
          </ThemeProvider>
        </NativeBaseProvider>
      </MoralisProvider>
    );
  }
  return <AppLoading />;
};

export default App;
