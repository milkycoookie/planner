import React from "react";
import { useTheme } from "styled-components/native";
import { SafeAreaProvider as RNSafeAreaProvider } from "react-native-safe-area-context";

type TProps = {
  children: React.ReactNode;
};

const SafeAreaProvider = (props: TProps) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <RNSafeAreaProvider style={{ backgroundColor: theme.base.white }}>
      {children}
    </RNSafeAreaProvider>
  );
};

export { SafeAreaProvider };
