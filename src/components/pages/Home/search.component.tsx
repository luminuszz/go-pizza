import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

import { useTheme } from '@core/hooks/useTheme';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  margin-top: ${({ theme }) => theme.utils.RFValue(-30)};
  padding: 0 24px;
`;

const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.TITLE};
    border: 1px solid ${theme.colors.SHAPE};
  `}
`;

const Input = styled(TextInput)`
  flex: 1;

  height: 52px;
  padding-left: 12px;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const ClearButton = styled.TouchableOpacity`
  margin-right: 7px;
`;

const Button = styled(RectButton)`
  width: 52px;
  height: 52px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.SUCCESS_900};
  border-radius: 18px;
  margin-left: 7px;
`;

type Props = TextInputProps & {
  onSearch: (value: string) => void;
  onClear: () => void;
};

export function SearchComponent({ onSearch, onClear, ...props }: Props) {
  const { theme } = useTheme();
  const [input, setInput] = useState('');

  const handleChange = (value: string) => setInput(value);

  const handleSearch = () => onSearch(input);

  function handleClear() {
    setInput('');
    onClear();
  }

  return (
    <Container>
      <InputArea>
        <Input
          value={input}
          onChangeText={handleChange}
          placeholder="Pesquisar"
          {...props}
        />

        <ClearButton onPress={handleClear}>
          <Feather name="x" size={16} />
        </ClearButton>
      </InputArea>

      <Button onPress={handleSearch}>
        <Feather name="search" size={16} color={theme.colors.BACKGROUND} />
      </Button>
    </Container>
  );
}
