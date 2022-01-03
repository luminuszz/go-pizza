import React from 'react';
import { Control, useController } from 'react-hook-form';
import { TextInputMaskProps } from 'react-native-text-input-mask';

import { Container, Label, Input, Size } from './styles';

type Props = TextInputMaskProps & {
  size: string;
  control: Control<any>;
  name: string;
  defaultValue?: string;
  currency: string;
};

export function InputPrice({
  size,
  currency,
  control,
  name,
  defaultValue,
  ...props
}: Props) {
  const { field } = useController({
    control,
    name,
    defaultValue: defaultValue || null,
  });

  return (
    <Container>
      <Size>
        <Label>{size}</Label>
      </Size>
      <Input
        keyboardType="numeric"
        mask="R$ [999999999],[99]"
        {...props}
        onChangeText={(_, pureValue) => {
          field.onChange(pureValue || _);
        }}
        onBlur={field.onBlur}
        value={field.value}
      />
    </Container>
  );
}
