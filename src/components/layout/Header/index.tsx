import React from 'react';

import { Container, Title } from './styles';

type Props = {
  componentLeft?: React.ReactNode;
  title?: string;
  componentRight?: React.ReactNode;
};

export function Header({ componentLeft, componentRight, title }: Props) {
  return (
    <Container>
      {componentLeft && componentLeft}

      {title && <Title>{title}</Title>}

      {componentRight && componentRight}
    </Container>
  );
}
