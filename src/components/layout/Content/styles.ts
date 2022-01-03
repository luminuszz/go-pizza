import styled from 'styled-components/native';

type ContainerProps = {
  paddingX?: number;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding: 0 ${(props) => props.paddingX || 0}px;
`;
