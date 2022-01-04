import TextInputMask from 'react-native-text-input-mask';

import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isError: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 56px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.PRIMARY_900 : theme.colors.SHAPE};
  border-radius: 12px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Size = styled.View<ContainerProps>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${({ theme, isError }) =>
    isError ? theme.colors.PRIMARY_900 : theme.colors.SHAPE};
  margin-right: 18px;
`;

export const Label = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.SECONDARY_900};
  `};
`;
export const Input = styled(TextInputMask)`
  flex: 1;
  margin-left: 7px;
`;

export const ErrorMessageHelperContent = styled.View`
  margin: 2px 0;
`;

export const ErrorMessageHelperText = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.PRIMARY_900};
  `};
`;
