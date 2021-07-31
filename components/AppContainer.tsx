import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import UserContext from "./UserContext";
import AuthScreen from "../container/AuthScreen";

import { SCREENS } from "../consts";
import { getHeaderOptions, getHeaderStyle } from "../styles/header";

const Stack = createStackNavigator();

const AppContainer = () => {
  // const { user } = useContext(UserContext);
  const user = true;
  const theme = useContext(ThemeContext);
  // const insets = useSafeAreaInsets();

  // const headerStyle = getHeaderStyle(theme);
  const headerOptions = getHeaderOptions(theme);

  return (
    <NavigationContainer theme={theme.navigation}>
      <StatusBar
        style={theme.name === "dark" ? "light" : "dark"}
        backgroundColor="transparent"
        translucent={true}
      />

      <Stack.Navigator
        initialRouteName={SCREENS.AUTH}
        screenOptions={{
          ...headerOptions,
          cardStyle: {
            backgroundColor: theme.base.white,
          },
        }}
      >
        {user ? (
          <>
            <Stack.Screen
              name={SCREENS.AUTH}
              component={AuthScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <></>
          // <Stack.Screen
          //   name={SCREENS.AUTH}
          //   component={AuthStackScreen}
          //   options={authStackScreenOptions(theme)}
          // />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
