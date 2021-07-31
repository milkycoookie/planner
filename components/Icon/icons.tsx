import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

/* eslint-disable max-len */
export const user = ({ fill, ...otherProps }: any) => (
  <Svg viewBox="0 0 22 23" {...otherProps}>
    <Path
      d="M11 0a6 6 0 00-6 6v1a6 6 0 1012 0V6a6 6 0 00-6-6zm-.002 16C6.994 16 1.854 18.167.374 20.09-.54 21.279.33 23 1.829 23H20.17c1.5 0 2.37-1.721 1.455-2.91-1.479-1.922-6.62-4.09-10.627-4.09z"
      fill={fill}
    />
  </Svg>
);
