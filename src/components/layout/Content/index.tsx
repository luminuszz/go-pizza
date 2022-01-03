import React from 'react';

import { Container } from './styles';

type Props = {
  paddingX?: number;
  children: React.ReactNode;
};

export function Content({ children, paddingX }: Props) {
  return <Container paddingX={paddingX}>{children}</Container>;
}
