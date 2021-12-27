import React from 'react';
import {
  GestureHandlerRootView,
  RectButtonProps,
} from 'react-native-gesture-handler';

import { Load, Type, Container, Title } from './styles';

type Props = RectButtonProps & {
  type?: Type;
  text: string;
  isLoading?: boolean;
};

export function Button({ type = 'primary', text, isLoading, ...props }: Props) {
  return (
    <GestureHandlerRootView>
      <Container type={type} enabled={!isLoading} {...props}>
        {isLoading ? <Load /> : <Title>{text}</Title>}
      </Container>
    </GestureHandlerRootView>
  );
}
