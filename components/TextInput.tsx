import React from "react";
import styled, { useTheme } from "styled-components/native";
import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleProp,
  View,
  TextStyle,
} from "react-native";

import Icon, { TIcons, TProps as TIconProps } from "./Icon";
import { transparentize } from "polished";

type TTextInputRequired = Required<
  Pick<TextInputProps, "autoCompleteType" | "placeholder" | "keyboardType">
>;

export type TProps = TextInputProps &
  TTextInputRequired & {
    icon?: TIcons;
    iconProps?: Partial<TIconProps>;
    style?: StyleProp<View>;
    firstChild?: boolean;
    lastChild?: boolean;
    isIconLeft?: boolean;
    inputStyle?: StyleProp<TextStyle>;
    pattern?: string | RegExp;
    onIconPress?: () => void;
  };

const TextInput = (props: TProps) => {
  const {
    icon,
    firstChild,
    lastChild,
    style,
    inputStyle,
    isIconLeft = false,
    iconProps,
    pattern,
    onChangeText,
    onIconPress,
    ...restProps
  } = props;
  const theme = useTheme();

  const _onChangeText = (text: string) => {
    if (pattern) {
      const condition = new RegExp(pattern);
      const isValid = condition.test(text);
      if (!isValid) return null;
    }
    onChangeText && onChangeText(text);
  };

  const IconComp = () =>
    icon && (
      <IconButton
        isIconLeft={isIconLeft}
        firstChild={firstChild}
        lastChild={lastChild}
        onPress={onIconPress}
      >
        <IconStyled icon={icon} color={theme.accent.default} {...iconProps} />
      </IconButton>
    );

  return (
    <Container
      firstChild={firstChild}
      lastChild={lastChild}
      style={[
        // @ts-ignore
        style,
        {
          borderBottomWidth: lastChild || !firstChild ? 1 : 0,
        },
      ]}
    >
      {isIconLeft && IconComp()}
      <TextInputStyled
        style={inputStyle}
        firstChild={firstChild}
        lastChild={lastChild}
        isIconLeft={isIconLeft}
        hasIcon={!!icon}
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        selectionColor={theme.accent.default}
        placeholderTextColor={transparentize(0.2, theme.accent.default)}
        onChangeText={_onChangeText}
        {...restProps}
      />
      {!isIconLeft && IconComp()}
    </Container>
  );
};

const inputBorderRadius = "8px";
const height = 50;

const getBorderTopLeftRadius = ({ lastChild, firstChild }: any) => {
  if (firstChild && lastChild) return inputBorderRadius;
  if (firstChild) return inputBorderRadius;
  return lastChild ? "0px" : inputBorderRadius;
};

const getBorderTopRightRadius = ({ lastChild, firstChild }: any) => {
  if (firstChild && lastChild) return inputBorderRadius;
  if (firstChild) return inputBorderRadius;
  return lastChild ? "0px" : inputBorderRadius;
};

const getBorderBottomLeftRadius = ({ lastChild, firstChild }: any) => {
  if (firstChild && lastChild) return inputBorderRadius;
  if (firstChild) return "0px";
  return lastChild ? inputBorderRadius : "0px";
};
const getBorderBottomRightRadius = ({ lastChild, firstChild }: any) => {
  if (firstChild && lastChild) return inputBorderRadius;
  else if (firstChild) return "0px";
  return lastChild ? inputBorderRadius : "0px";
};

type TContainer = {
  hasIcon?: boolean;
  isIconLeft?: boolean;
  firstChild?: boolean;
  lastChild?: boolean;
};
const Container = styled.View<TContainer>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${height}px;

  background: ${({ theme }) => theme.base.white};

  border: 1px solid ${({ theme }) => theme.base.black};
  border-radius: ${inputBorderRadius};

  border-top-left-radius: ${getBorderTopLeftRadius};
  border-top-right-radius: ${getBorderTopRightRadius};
  border-bottom-left-radius: ${getBorderBottomLeftRadius};
  border-bottom-right-radius: ${getBorderBottomRightRadius};
`;

type TTextInputStyled = {
  value?: string;
  secureTextEntry?: boolean;
  hasIcon?: boolean;
  isIconLeft?: boolean;
  firstChild?: boolean;
  lastChild?: boolean;
};
const TextInputStyled = styled(RNTextInput)<TTextInputStyled>`
  flex: 1;
  height: ${height - 2}px;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.base.black};
  background: ${({ theme }) => theme.base.white};
  padding: 0px 22px;
  padding-left: ${({ isIconLeft }) => (isIconLeft ? "0px" : "22px")};
  padding-top: ${({ firstChild }) => (firstChild ? "1px" : "0px")};
  padding-bottom: ${({ lastChild }) => (lastChild ? "1px" : "0px")};

  border-top-left-radius: ${getBorderTopLeftRadius};
  border-top-right-radius: ${getBorderTopRightRadius};
  border-bottom-left-radius: ${getBorderBottomLeftRadius};
  border-bottom-right-radius: ${getBorderBottomRightRadius};
`;

type TIconButton = {
  hasIcon?: boolean;
  isIconLeft: boolean;
  firstChild?: boolean;
  lastChild?: boolean;
};
const IconButton = styled.TouchableOpacity<TIconButton>`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: ${({ isIconLeft }) => (isIconLeft ? "11px" : "15px")};
  background: ${({ theme }) => theme.base.white};

  border-top-left-radius: ${getBorderTopLeftRadius};
  border-top-right-radius: ${getBorderTopRightRadius};
  border-bottom-left-radius: ${getBorderBottomLeftRadius};
  border-bottom-right-radius: ${getBorderBottomRightRadius};
`;

const IconStyled = styled(Icon)``;

export default TextInput;
