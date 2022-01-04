import React from 'react';
import { Control, useController } from 'react-hook-form';
import { TextInputMaskProps } from 'react-native-text-input-mask';

import {
  Container,
  Label,
  Input,
  Size,
  ErrorMessageHelperText,
  ErrorMessageHelperContent,
} from './styles';

type Props = TextInputMaskProps & {
  size: string;
  control: Control<any>;
  name: string;
  defaultValue?: string;
  currency: string;
  error?: {
    message?: string;
  };
};

export function InputPrice({
  size,
  currency,
  control,
  name,
  defaultValue,
  error,
  ...props
}: Props) {
  const { field } = useController({
    control,
    name,
    defaultValue: defaultValue || null,
  });

  return (
    <>
      <Container isError={!!error}>
        <Size isError={!!error}>
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
      {!!error && (
        <ErrorMessageHelperContent>
          <ErrorMessageHelperText>{error.message}</ErrorMessageHelperText>
        </ErrorMessageHelperContent>
      )}
    </>
  );
}
