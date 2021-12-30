import React from 'react';

import { Image, Placeholder, PlaceholderTitle } from './styles';

type Props = {
  uri: string | null;
};

export function Photo({ uri }: Props) {
  return uri ? (
    <Image source={{ uri }} />
  ) : (
    <Placeholder>
      <PlaceholderTitle>Nenhuma foto {'\n'} carregada</PlaceholderTitle>
    </Placeholder>
  );
}
