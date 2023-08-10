import styled, { css } from "styled-components";


  interface ButtonsProps {
    menuOpen: boolean;
  }
  
  export const ButtonsProps = styled.div<ButtonsProps>`
  display: flex;
  align-items: center;
  gap: 17px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 20px;
    display: none;
    flex-direction: column;
    margin-bottom: 15px;


    ${props =>
      props.menuOpen &&
      css`
        display: flex;
      `}
  }
`;


export const ButtonLogin = styled.button`
  width: 90px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: none;
  color: var(--brand--brand1);
  border: none;

  &:hover {
    color: var(--brand--brand2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonRegister = styled.button`
  background-color: none;
  color: var(--grey--scale--grey-4);
  padding: 8px 16px;
  border: 2px solid var(--grey--scale--grey-4);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  width: 133px;
  height: 48px;
  font-size: 16px;
  color:var(--grey--scale--grey-0);

  @media (max-width: 768px) {
    width: 100%;
  }
`;