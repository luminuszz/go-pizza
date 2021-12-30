import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.PRIMARY_100};
`;
