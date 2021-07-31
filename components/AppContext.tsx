import React, { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";

import Storage from "../utils/storage";
import { darkTheme } from "../styles/darkTheme";
import { defaultTheme } from "../styles/defaultTheme";
import { TSelectedThemeName, TThemeName } from "../types";

export const themes = ["auto", "light", "dark"];

type TProps = {
  children: React.ReactNode;
};

type TState = {
  theme: TThemeName;
  selectedTheme: TSelectedThemeName;
  setSelectedTheme: (theme: TSelectedThemeName) => void;
};

const AppContext = React.createContext<TState>({
  theme: "dark",
  selectedTheme: "auto",
  setSelectedTheme: () => null,
});

const AppProvider = (props: TProps) => {
  const { children } = props;
  const colorScheme = useColorScheme();
  const [selectedTheme, _setSelectedTheme] = useState<TSelectedThemeName>("auto");

  const setSelectedTheme = async (val: TSelectedThemeName) => {
    _setSelectedTheme(val);
    await Storage.setItem("SELECTED_THEME", val);
  };

  const getTheme = (): TThemeName => {
    let result: TThemeName = "dark";
    if (selectedTheme === "auto") {
      result = colorScheme ? colorScheme : "dark";
    } else {
      result = selectedTheme;
    }
    return result;
  };

  const checkSelectedTheme = async () => {
    const selectedThemeVal = await Storage.getItem("SELECTED_THEME");
    if (selectedThemeVal && themes.includes(selectedThemeVal)) {
      setSelectedTheme(selectedThemeVal as TSelectedThemeName);
    }
  };

  const theme = getTheme();

  useEffect(() => {
    checkSelectedTheme();
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        selectedTheme,
        setSelectedTheme,
      }}
    >
      <ThemeProvider theme={theme === "dark" ? darkTheme : defaultTheme}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };
