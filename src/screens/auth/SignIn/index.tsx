import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';

import brandImg from '@assets/brand.png';
import { Button } from '@components/form/Button';
import { Input } from '@components/form/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { NavigatorPublicScreenProps } from '@core/config/routes/types.routes';
import { useAuth } from '@core/hooks/useAuth';

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordButtonLabel,
} from './styles';

type FormPayload = {
  email: string;
  password: string;
};

type Props = NavigatorPublicScreenProps<'Login'> & {};

const formSchema: yup.SchemaOf<FormPayload> = yup.object().shape({
  email: yup.string().defined().email(),
  password: yup.string().defined().min(2),
});

function LoginScreen(props: Props) {
  const { loginWithEmailAndPassword, isLoading } = useAuth();
  const { control, handleSubmit } = useForm<FormPayload>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleLogin({ email, password }: FormPayload) {
    loginWithEmailAndPassword(email, password);
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

          <ForgotPasswordButton>
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
