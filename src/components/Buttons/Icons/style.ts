import { styled } from "styled-components";

export const IconStyled = styled.div`
  width: 16px;
  height: 16px;
  padding: 8px;
  background-color: var(--brand--brand2);
  color: var(--colors--fixed--white-fixed);
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border-radius: 50%;
  font-size: var(--text--body-2-500);
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    background-color: var(--random--random6);
  }
`;
