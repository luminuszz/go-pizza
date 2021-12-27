import React from 'react';
import { Control, useController } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

import { Container, Type } from './styles';

type Props = TextInputProps & {
  type?: Type;
  control?: Control<any>;
  name: string;
};

export function Input({
  type = 'primary',
  control,
  defaultValue,
  name,
  ...props
}: Props) {
  const { field } = useController({
    control: control || null,
    defaultValue: defaultValue || null,
    name,
  });

  return control ? (
    <Container type={type} {...field} {...props} />
  ) : (
    <Container type={type} {...props} />
  );
}
