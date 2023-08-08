import styled, { css } from "styled-components";

interface HeaderProps {
  menuOpen: boolean;
}

interface ButtonsProps {
  menuOpen: boolean;
}

export const Main = styled.main`
  background-color: #f2f2f2;
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
  background-color: white;
  height: 80px;
  padding: 0 20px;
  border-bottom: 2px solid #dee2e6;
  border-right: 2px solid #dee2e6;

  @media (max-width: 768px) {
    /* flex-direction: column; */
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
  color: #4529e6;
  border: none;

  &:hover {
    color: #4963e1;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonRegister = styled.button`
  background-color: none;
  color: #fff;
  padding: 8px 16px;
  border: 2px solid #adb5bd;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  width: 133px;
  height: 48px;
  font-size: 16px;
  color: #0b0d0d;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 38px;
  margin-top: 60px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  color: #000000;
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
  color: #495057;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
`;

export const ForgotPasswordLink = styled.a`
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: #495057;
  margin-top: 5px;
`;

export const ButtonToEnter = styled.button`
  background-color: #4529e6;
  color: #ffffff;
  width: 100%;
  height: 48px;
  border: 2px solid #4529e6;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0px 30px 0px;

  &:hover {
  background-color: #4963e1;
}
  @media (max-width: 768px) {
    width: 100%;

  }
`;

export const ButtonToRegister = styled.button`
  background-color: none;
  color: #0b0d0d;
  width: 100%;
  height: 48px;
  border: 2px solid #adb5bd;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0px 30px 0px;

  @media (max-width: 768px) {
    width: 100%;
  }
  
`;

export const SignupText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #666;
`;

export const Footer = styled.footer`
  background-color: #0b0d0d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 140px;
  width: 100%;

  @media (max-width: 768px) {
    height: 250px;
  }

  h4 {
    color: #ffffff;
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