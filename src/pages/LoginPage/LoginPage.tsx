import { useState } from "react";
import {
  HeaderProps,
  ButtonsProps,
  ButtonToEnter,
  Main,
  InputEmail,
  PageContainer,
  FormContainer,
  SubTitle,
  Input,
  ForgotPasswordLink,
  ButtonLogin,
  ButtonRegister,
  SignupText,
  Labels,
  ButtonToRegister,
  Footer,
  ImageUp,
  HamburgerIcon,
} from "./index";


const LoginPage: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <Main>
      <HeaderProps menuOpen={menuOpen}>
        <img src="../../src/assets/logo.svg" alt="" />
        <ButtonsProps menuOpen={menuOpen}>
          <ButtonLogin>Fazer Login</ButtonLogin>
          <ButtonRegister>Cadastrar</ButtonRegister>
        </ButtonsProps>
        <HamburgerIcon onClick={toggleMenu}>
          {menuOpen ? <h2>X</h2> : <h2>☰</h2>}
        </HamburgerIcon>
      </HeaderProps>
      <PageContainer>
        <FormContainer>
          <SubTitle>Login</SubTitle>
          <InputEmail>
            <Labels htmlFor="email">Email</Labels>
            <Input type="email" id="email" name="email" placeholder="Digitar Email" />
          </InputEmail>
          <Labels htmlFor="password">Senha</Labels>
          <Input type="password" id="password" name="password" placeholder="Digitar Senha" />
          <ForgotPasswordLink href="#">Esqueci minha senha</ForgotPasswordLink>
          <ButtonToEnter>Entrar</ButtonToEnter>
          <SignupText>Ainda não possui conta?</SignupText>
          <ButtonToRegister>Cadastrar</ButtonToRegister>
        </FormContainer>
      </PageContainer>
      <Footer>
        <img src="../../src/assets/MotorsshopFooter.svg" alt="" />
        <h4>© 2022 - Todos os direitos reservados.</h4>
        <a href="#">
          <ImageUp src="../../src/assets/Up.svg" alt="" />
        </a>
      </Footer>
    </Main>
  );
};

export default LoginPage;