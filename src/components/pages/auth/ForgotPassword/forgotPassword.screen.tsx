import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';

import brandImg from '@assets/brand.png';
import { Button } from '@components/elements/Button';
import { Input } from '@components/elements/form/Input';
import {
  ForgotPasswordButton,
  ForgotPasswordButtonLabel,
} from '@components/pages/auth/SignIn/styles';
import { zodResolver } from '@hookform/resolvers/zod';

import strings from '@core/config/locale/strings';
import { NavigatorPublicScreenProps } from '@core/config/routes/types.routes';
import { useAuth } from '@core/hooks/useAuth';
import {
  UserForgotPassword,
  userForgotPasswordSchema,
} from '@core/types/user.type';

import { Container, Content, Title, Brand } from './styles';

type Props = NavigatorPublicScreenProps<'ForgotPassword'>;

function ForgotPasswordScreen({ navigation }: Props) {
  const { forgotPasssword } = strings.pages;
  const { sendForgotEmailPassword, isLoading } = useAuth();
  const { control, handleSubmit } = useForm<UserForgotPassword>({
    resolver: zodResolver(userForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  function handleSendEmailForgotPassword({ email }: UserForgotPassword) {
    sendForgotEmailPassword(email).then(() => {
      navigation.navigate({
        name: 'Login',
        params: undefined,
      });
    });
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImg} />

          <Title>{forgotPasssword.title}</Title>
          <Input
            name="email"
            control={control}
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <ForgotPasswordButton
            onPress={() =>
              navigation.navigate({ name: 'Login', params: undefined })
            }
            disabled={isLoading}
          >
            <ForgotPasswordButtonLabel>
              {forgotPasssword.backToLoginMessage}
            </ForgotPasswordButtonLabel>
          </ForgotPasswordButton>

          <Button
            isLoading={isLoading}
            onPress={handleSubmit(handleSendEmailForgotPassword) as any}
            text="Enviar email de recuperação"
            type="secondary"
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}

export { ForgotPasswordScreen };
