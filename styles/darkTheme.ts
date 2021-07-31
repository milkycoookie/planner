import { Theme } from "@react-navigation/native";
import { DefaultTheme, IAccent, IBase, IComputed } from "styled-components/native";

export const accent: IAccent = {
  default: "#5BC628",
};

export const base: IBase = {
  black: "#FFFFFF",
  white: "#242424",
};

export const computed: IComputed = {};

const navigation: Theme = {
  dark: true,
  colors: {
    primary: accent.default,
    background: base.white,
    card: base.white,
    text: base.white,
    border: accent.default,
    notification: base.black,
  },
};

export const darkTheme: DefaultTheme = {
  name: "dark",
  accent,
  base,
  computed,
  navigation,
};

export default darkTheme;
