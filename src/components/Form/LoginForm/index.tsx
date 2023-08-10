
 // Importe o useHistory
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate(); 

  const handleRegisterClick = () => {
    navigate("/register"); 
  };

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
        required
      />
      <ForgotPasswordLink href="#">Esqueci minha senha</ForgotPasswordLink>
      <ButtonToEnter type="submit">Entrar</ButtonToEnter>
      <SignupText>Ainda não possui conta?</SignupText>
      <ButtonToRegister onClick={handleRegisterClick}>Cadastrar</ButtonToRegister>
    </FormContainer>
  );
};
