import { useContext, useState } from "react";
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
import { UserContext } from "../../providers/userProvider";
import { useForm } from "react-hook-form";
import { loginSchema, tLogin } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../../components/Header";

const LoginPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({
    resolver: zodResolver(loginSchema),
  });

  const { login, setUser } = useContext(UserContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Main>
      <Header/>
      <PageContainer>
        <FormContainer>
          <form onSubmit={handleSubmit(login)}>
            <SubTitle>Login</SubTitle>
            <InputEmail>
              <Labels htmlFor="email">Email</Labels>
              <Input
                type="email"
                id="email"
                placeholder="Digitar Email"
                {...register("email")}
              />
            </InputEmail>
            <Labels htmlFor="password">Senha</Labels>
            <Input
              type="password"
              id="password"
              placeholder="Digitar Senha"
              {...register("password")}
            />
            <ForgotPasswordLink href="#">
              Esqueci minha senha
            </ForgotPasswordLink>
            <ButtonToEnter type="submit">Entrar</ButtonToEnter>
          </form>
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
