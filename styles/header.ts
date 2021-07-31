import { DefaultTheme } from "styled-components/native";
import { StackNavigationOptions } from "@react-navigation/stack";

export const getHeaderOptions = (theme: DefaultTheme): StackNavigationOptions => ({
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontSize: 17,
    color: theme.base.black,
  },
  headerStyle: getHeaderStyle(theme),
});

export const getHeaderStyle = (theme: DefaultTheme) => ({
  backgroundColor: theme.base.white,
  borderWidth: 0,
  shadowOffset: { width: 0, height: 0 },
  shadowColor: "transparent",
  shadowRadius: 0,
  shadowOpacity: 0,
  elevation: 0,
});
