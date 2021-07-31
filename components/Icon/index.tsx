import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { Animated, ViewStyle } from "react-native";

import * as ICONS from "./icons";

export type TIcons = keyof typeof ICONS;

const sizes = {
  appleLogo: 44,
  xxsmall: 9,
  xsmall: 14,
  small: 18,
  medium: 24,
  big: 26,
  extraBig: 36,
  social: 60,
};
export type TSizes = keyof typeof sizes;

export type TProps = {
  icon: TIcons;
  size?: TSizes;
  customSize?: number;
  color?: string;
  style?: Animated.AnimatedProps<ViewStyle>;
};

const Icon = (props: TProps) => {
  const { icon, size, color, style, customSize } = props;
  const theme = useContext(ThemeContext);

  const Component = getIconComponent(ICONS[icon], {
    size: customSize || (size && sizes[size]) || sizes.medium,
  });

  return (
    <Container style={style}>
      <Component fill={color || theme?.accent?.default || theme.base.white} />
    </Container>
  );
};

const getIconComponent = (Comp, { size }) => {
  return styled(Comp)`
    width: ${size}px;
    height: ${size}px;
    min-width: ${size}px;
    min-height: ${size}px;
  `;
};

export default Icon;

const Container = styled(Animated.View)``;
