import React, { ReactNode, useContext } from "react";
import { Text as RNText, TextProps, StyleProp, TextStyle } from "react-native";
import { ThemeContext } from "styled-components/native";

type TStyleProp = StyleProp<Omit<TextStyle, "fontFamily">>;
type TStylePropRNText = StyleProp<TextStyle>;

type TFontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type TProps = {
  style?: TStyleProp;
  children: ReactNode;
} & TextProps;

const Text = (props: TProps) => {
  const { style, children } = props;
  const theme = useContext(ThemeContext);
  const convertedStyle = style ? convertFontCSSProperties(style) : [];

  return (
    <RNText
      {...props}
      style={[
        { color: theme.base.black },
        // @ts-ignore
        ...convertedStyle,
      ]}
    >
      {children}
    </RNText>
  );
};

const convertFontCSSProperties = (style: TStyleProp): TStylePropRNText => {
  const stylesCombined = combineAllStyles(style);
  const fontWeight = stylesCombined && stylesCombined.fontWeight;
  const fontFamily = getFontFamilyName(fontWeight);

  const resultStyle: TStylePropRNText = [
    // @ts-ignore
    ...style,
    {
      fontFamily,
      fontWeight: "400",
    },
  ];
  return resultStyle;
};

type TFontWeightNumbered = Omit<TFontWeight, "bold" | "normal">;

const getFontFamilyName = (fontWeight?: TFontWeight) => {
  const weightName = getFontWeightName(fontWeight);
  const weightNumber = getFontWeight(fontWeight);
  const result = `Manrope_${weightNumber}${weightName}`;
  return result;
};

const getFontWeight = (fontWeight?: TFontWeight): TFontWeightNumbered => {
  if (!fontWeight) return "400";
  if (fontWeight === "bold") return "700";
  if (fontWeight === "normal") return "400";
  return fontWeight;
};

const getFontWeightName = (fontWeight?: TFontWeight) => {
  switch (fontWeight) {
    case "100":
      return "Thin";
    case "200":
      return "ExtraLight";
    case "300":
      return "Light";
    case undefined:
    case "normal":
    case "400":
      return "Regular";
    case "500":
      return "Medium";
    case "600":
      return "SemiBold";
    case "bold":
    case "700":
      return "Bold";
    case "800":
      return "ExtraBold";
    case "900":
      return "Black";
    default:
      throw new Error("Unknown font weight");
  }
};

/**
 * style prop is array of styles [{ fontSize: 13 }, { fontSize: 15 }]
 * in some cases fontSize can be defined in style[0] but not in style[1]
 * but we need "latest" prop defined, so to achive this just combine all styles
 */
const combineAllStyles = (style: TStyleProp): TextStyle => {
  const allStyles: TextStyle = {};
  // @ts-ignore
  style?.forEach((s) => {
    Object.entries(s).forEach(([key, val]) => {
      // @ts-ignore
      allStyles[key] = val;
    });
  });
  return allStyles;
};

export default Text;
