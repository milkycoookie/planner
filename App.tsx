import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
/*eslint-disable @typescript-eslint/camelcase */
import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
/*eslint-enable @typescript-eslint/camelcase */

import AppContainer from "./components/AppContainer";
import { AppProvider } from "./components/AppContext";
import { SafeAreaProvider } from "./components/SafeAreaContext";

import ErrorReporter from "./utils/errorReporter";
import { User } from "./types";

ErrorReporter.init();

const App = () => {
  // const [user, setUser] = useState<User.TUser | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState<User.TUser | null>(null);
  const [isStaging, setIsStaging] = useState<boolean>(false);
  const [isUpdateRequired, setIsUpdateRequired] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const startAsync = async () => {
    try {
      /*eslint-disable @typescript-eslint/camelcase */
      await Font.loadAsync({
        Manrope_200ExtraLight,
        Manrope_300Light,
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold,
      });
      /*eslint-enable @typescript-eslint/camelcase */
    } catch (err) {
      // ErrorReporter.send("Failed loading fonts", undefined, err);
    }

    // try {
    //   const token = await Auth.getToken();
    //   if (!!token) {
    //     try {
    //       const user = (await getCurrentUser())?.data;
    //       setUser(user);
    //     } catch {
    //       setUser(null);
    //       setErrors([...errors, "Не удалось загрузить данные пользователя"]);
    //     }
    //   }
    // } catch (err) {
    //   ErrorReporter.send("Failed to load auth token", undefined, err);
    // }

    // try {
    //   const updateRequired = await Updates.checkIsUpdateRequired();
    //   setIsUpdateRequired(updateRequired);
    // } catch (err) {
    //   ErrorReporter.send("Failed to identify is update required", undefined, err);
    // }
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={startAsync}
        onFinish={async () => {
          setIsReady(true);
        }}
        onError={(error) => {
          ErrorReporter.send(error);
        }}
      />
    );
  }

  return (
    <AppProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <AppContainer />
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default App;
