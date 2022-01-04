import React from 'react';
import { Control, useController } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

import {
  Container,
  Type,
  ErrorMessageHelperContent,
  ErrorMessageHelperText,
} from './styles';

type Props = TextInputProps & {
  type?: Type;
  control?: Control<any>;
  name: string;
  error?: {
    message?: string;
  };
};

function Input({
  type = 'primary',
  control,
  defaultValue,
  name,
  error,
  ...props
}: Props) {
  const { field } = useController({
    control,
    defaultValue: defaultValue || null,
    name,
  });

  console.log({
    error,
  });

  return control ? (
    <>
      <Container
        isError={!!error}
        type={type}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...props}
      />
      {!!error && (
        <ErrorMessageHelperContent>
          <ErrorMessageHelperText>{error?.message}</ErrorMessageHelperText>
        </ErrorMessageHelperContent>
      )}
    </>
  ) : (
    <Container isError={!!error} type={type} {...props} />
  );
}

export { Input };
