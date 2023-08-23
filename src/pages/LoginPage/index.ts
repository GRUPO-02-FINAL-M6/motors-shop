import styled, { css } from "styled-components";

interface HeaderProps {
  menuOpen: boolean;
}

interface ButtonsProps {
  menuOpen: boolean;
}

export const Main = styled.main`
  background-color:var(--grey--scale--grey-8);
  height: 100vh;
  width: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const HeaderProps = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:var(--grey--scale--grey-10);
  height: 80px;
  padding: 0 20px;
  border-bottom: 2px solid var(--grey--scale--grey-6);
  border-right: 2px solid var(--grey--scale--grey-6);

  @media (max-width: 768px) {
    height: 80px;
    overflow: hidden;

    ${props =>
      props.menuOpen &&
      css`
        height: auto;
      `}
  }
`;

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

export const FormContainer = styled.div`
  background-color: var(--grey--scale--grey-10);
  padding: 38px;
  margin-top: 60px;
  border-radius: 8px;
  width: 412px;
  height: 557px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: var(--grey--scale--grey-0);
  margin-bottom: 40px;
`;

export const InputEmail = styled.div`
  margin-bottom: 25px;
`;

export const Labels = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.94px;
  width: 36px;
  height: 17px;
  color: var(--grey--scale--grey-2);
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px;
  margin-bottom: 10px;
  border: 2px solid var(--grey--scale--grey-6);
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
`;

export const ForgotPasswordLink = styled.a`
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: var(--grey--scale--grey-2);
  margin-top: 5px;
`;

export const SignupText = styled.p`
  font-size: 14px;
  text-align: center;
  color: var(--grey--scale--grey-2);
`;

export const Footer = styled.footer`
  background-color: var(--grey--scale--grey-0);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 140px;
  width: 100%;

  @media (max-width: 768px) {
    height: 250px;
  }

  h4 {
    color: var(--grey--scale--grey-10);
    font-size: 12px;
    margin-top: 0; /* Removendo o espaçamento no topo */
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ImageUp = styled.img`
  width: 50px;
  height: 50px;
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
  display: block;
  font-size:16px;
  }
`;
