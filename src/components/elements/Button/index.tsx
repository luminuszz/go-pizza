import React from 'react';
import {
  GestureHandlerRootView,
  RectButton,
  RectButtonProps,
} from 'react-native-gesture-handler';

import { Load, Type, Container, Title } from './styles';

interface Props extends RectButtonProps {
  type?: Type;
  text: string;
  isLoading?: boolean;
  onPress?: any;
}

export function Button({
  type = 'primary',
  text,
  isLoading,
  onPress,
  ...props
}: Props) {
  return (
    <GestureHandlerRootView>
      <Container type={type} enabled={!isLoading} onPress={onPress} {...props}>
        {isLoading ? <Load /> : <Title>{text}</Title>}
      </Container>
    </GestureHandlerRootView>
  );
}
