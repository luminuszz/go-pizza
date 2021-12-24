import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import brandImg from '@assets/brand.png';
import { Button } from '@components/form/Button';
import { Input } from '@components/form/Input';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '@core/hooks/useAuth';

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordButtonLabel,
} from './styles';

export function LoginScreen() {
  const navigator = useNavigation();
  const { loginWithEmailAndPassword, isLoading, isAuthenticated } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });

  function handleLogin() {
    const { email, password } = form;
    loginWithEmailAndPassword(email, password);
  }

  const handleChange = (vl: string, name: string) =>
    setForm((old) => ({ ...old, [name]: vl }));

  useEffect(() => {
    if (isAuthenticated) {
      navigator.navigate('Home' as any);
    }
  }, [isAuthenticated, navigator]);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImg} />

          <Title>Login</Title>
          <Input
            onChangeText={(vl) => handleChange(vl, 'email')}
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input
            onChangeText={(vl) => handleChange(vl, 'password')}
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
            onPress={handleLogin}
            text="Entrar"
            type="secondary"
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
