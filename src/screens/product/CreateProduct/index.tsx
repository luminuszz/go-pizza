import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { ButtonBack } from '@components/elements/BackButton';
import { Photo } from '@components/elements/Photo';
import { Header } from '@components/layout/Header';
import { MediaTypeOptions } from 'expo-image-picker';

import { NavigatorAppScreenProps } from '@core/config/routes/types.routes';
import { usePickImage } from '@core/hooks/usePickImage';

import {
  Container,
  DeleteLabelButton,
  DeleteLabelText,
  Upload,
  PickButton,
} from './styles';

type Props = NavigatorAppScreenProps<'CreateProduct'> & {};

function CreateProductScreen() {
  const { image, pickImageFromImageLibrary } = usePickImage({
    mediaTypes: MediaTypeOptions.Images,
  });

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header
        componentLeft={<ButtonBack />}
        componentRight={
          <DeleteLabelButton>
            <DeleteLabelText>Deletar</DeleteLabelText>
          </DeleteLabelButton>
        }
        title="Cadastrar"
      />
      <Upload>
        <Photo uri={image?.uri || null} />
        <PickButton
          type="secondary"
          text="Algo aqui"
          onPress={pickImageFromImageLibrary}
        />
      </Upload>
    </Container>
  );
}

export { CreateProductScreen };
