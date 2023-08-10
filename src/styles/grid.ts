import styled from 'styled-components';

interface IStyledContainerProps {
  containerWidth?: number;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  width: 100%;
  max-width: ${({ containerWidth }) =>
    containerWidth ? containerWidth : 100}%;
  margin: 0 auto;

`;

export const StyledGridBox = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray0};
  border-radius: 5px;
`;
