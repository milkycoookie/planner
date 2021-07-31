import { Theme } from "@react-navigation/native";
import "styled-components/native";
import { TThemeName } from ".";

declare module "styled-components/native" {
  export interface IAccent {
    default: string;
  }

  export interface IBase {
    black: string;
    white: string;
  }

  export interface IComputed {}

  export interface DefaultTheme {
    name: TThemeName;
    accent: IAccent;
    base: IBase;
    computed: IComputed;
    navigation: Theme;
  }
}
