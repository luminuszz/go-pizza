import React from 'react';

import happyEmoji from '@assets/happy.png';
import { getUser } from '@features/auth/auth.slice';
import styled, { css } from 'styled-components/native';

import { useAppSelector } from '@core/hooks/useRedux';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const GreetingEmoji = styled.Image`
  height: 32px;
  width: 32px;

  margin-right: 12px;
`;

const GreetingText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.utils.RFValue(20)};
    color: ${theme.colors.TITLE};
    font-family: ${theme.fonts.secondary};
  `}
`;

export function GreetingComponent() {
  const user = useAppSelector(getUser);

  return (
    <Container>
      <GreetingEmoji source={happyEmoji} />
      <GreetingText>Olá {user?.name}</GreetingText>
    </Container>
  );
}
