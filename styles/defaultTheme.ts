import { Theme } from "@react-navigation/native";
import { DefaultTheme, IAccent, IBase, IComputed } from "styled-components/native";

export const accent: IAccent = {
  default: "#5BC628",
};

export const base: IBase = {
  black: "#242424",
  white: "#FFFFFF",
};

export const computed: IComputed = {};

const navigation: Theme = {
  dark: false,
  colors: {
    primary: accent.default,
    background: base.white,
    card: base.white,
    text: base.white,
    border: accent.default,
    notification: base.black,
  },
};

export const defaultTheme: DefaultTheme = {
  name: "light",
  accent,
  base,
  computed,
  navigation,
};

export default defaultTheme;
