import React from 'react';

import type { TextInputProps } from 'react-native';

import { Container, Type } from './styles';

type Props = TextInputProps & {
  type?: Type;
};

export function Input({ type = 'primary', ...props }: Props) {
  return <Container type={type} {...props} />;
}
