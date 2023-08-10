import {
  ButtonToEnter,
  ButtonToRegister,
  ForgotPasswordLink,
  FormContainer,
  Input,
  InputEmail,
  Labels,
  SignupText,
  SubTitle,
} from "./style";

export const LoginForm = () => {
  return (
    <FormContainer>
      <SubTitle>Login</SubTitle>
      <InputEmail>
        <Labels htmlFor="email">Email</Labels>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Digitar Email"
        />
      </InputEmail>
      <Labels htmlFor="password">Senha</Labels>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Digitar Senha"
      />
      <ForgotPasswordLink href="#">Esqueci minha senha</ForgotPasswordLink>
      <ButtonToEnter>Entrar</ButtonToEnter>
      <SignupText>Ainda não possui conta?</SignupText>
      <ButtonToRegister>Cadastrar</ButtonToRegister>
    </FormContainer>
  );
};
