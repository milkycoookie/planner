import React, { useState } from "react";
import styled from "styled-components/native";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import Text from "../components/Text";
import TextInput from "../components/TextInput";

import { SCREENS } from "../consts";

type TFormData = {
  login: string;
  password: string;
};

const AuthScreen = () => {
  const { navigate } = useNavigation();
  const [securePassword, setSecurePassword] = useState(true);
  const {
    control,
    formState: { isValid, errors: validationErrors },
    handleSubmit,
  } = useForm<TFormData>({
    mode: "onChange",
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormData) => {
    // await send({ login, password });
  };

  return (
    <Container>
      <Header>
        <HeaderText>Смена пароля</HeaderText>
        <SubHeaderText>Пароль должен содержать не менее 6 символов</SubHeaderText>
      </Header>

      <ButtonsGroup
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 35,
          paddingHorizontal: 35,
        }}
      >
        {/* <FormErrors error={error} validationErrors={validationErrors} /> */}

        <Controller
          control={control}
          name="login"
          rules={{ required: true, minLength: 6 }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              firstChild={true}
              placeholder="Email"
              autoCompleteType="username"
              keyboardType="email-address"
              secureTextEntry={securePassword}
              // icon={securePassword ? "closedEye" : "openedEye"}
              onIconPress={() => setSecurePassword(!securePassword)}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: true, minLength: 6 }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              lastChild={true}
              placeholder="Пароль"
              autoCompleteType="password"
              keyboardType="default"
              secureTextEntry={securePassword}
              // icon={securePassword ? "closedEye" : "openedEye"}
              onIconPress={() => setSecurePassword(!securePassword)}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        {/* <SubmitButton
          isLoading={false}
          isDisabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        >
          Сменить пароль
        </SubmitButton>

        <CancelButton onPress={() => navigate(SCREENS.AUTH)}>Отмена</CancelButton> */}
      </ButtonsGroup>

      {/* <PolicyStyled /> */}
    </Container>
  );
};

export default AuthScreen;

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.base.white};
`;

const Header = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 25px;
  padding: 0px 34px;
`;

const HeaderText = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
  letter-spacing: -0.41px;
  color: ${({ theme }) => theme.base.black};
  margin-top: 17px;
`;

const SubHeaderText = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.base.black};
  margin-top: 5px;
`;

const ButtonsGroup = styled.ScrollView`
  width: 100%;
  margin-top: 100px;
`;

// const SubmitButton = styled(Button)`
//   margin-top: 20px;
// `;

// const CancelButton = styled(OpacityButton)`
//   margin-top: 5px;
// `;

// const PolicyStyled = styled(Policy)`
//   margin-top: 10px;
//   margin-bottom: 35px;
// `;
