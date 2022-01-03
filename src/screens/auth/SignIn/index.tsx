import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';

import brandImg from '@assets/brand.png';
import { Button } from '@components/elements/Button';
import { Input } from '@components/elements/form/Input';
import { zodResolver } from '@hookform/resolvers/zod';

import { NavigatorPublicScreenProps } from '@core/config/routes/types.routes';
import { useAuth } from '@core/hooks/useAuth';
import {
  UserLoginPayload,
  userLoginPayloadSchema,
} from '@core/types/user.type';

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordButtonLabel,
} from './styles';

type Props = NavigatorPublicScreenProps<'Login'>;

function LoginScreen({ navigation }: Props) {
  const { loginWithEmailAndPassword, isLoading } = useAuth();
  const { control, handleSubmit } = useForm<UserLoginPayload>({
    resolver: zodResolver(userLoginPayloadSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleLogin({ email, password }: UserLoginPayload) {
    loginWithEmailAndPassword(email.trim(), password.trim());
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImg} />

          <Title>Login</Title>
          <Input
            name="email"
            control={control}
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input
            name="password"
            control={control}
            placeholder="Senha"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />

          <ForgotPasswordButton
            onPress={() =>
              navigation.navigate({
                name: 'ForgotPassword',
                params: undefined,
              })
            }
          >
            <ForgotPasswordButtonLabel>
              Esqueci minha senha
            </ForgotPasswordButtonLabel>
          </ForgotPasswordButton>

          <Button
            isLoading={isLoading}
            onPress={handleSubmit(handleLogin) as any}
            text="Entrar"
            type="secondary"
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}

export { LoginScreen };
