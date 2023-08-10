import { ButtonLogin, ButtonRegister, ButtonsProps } from "./style";

interface LoginButtonsProps {
  menuOpen: boolean;
}

export const LoginButtons: React.FC<LoginButtonsProps> = ({ menuOpen }) => {
  return (
    <ButtonsProps menuOpen={menuOpen}>
      <ButtonLogin>Fazer Login</ButtonLogin>
      <ButtonRegister>Cadastrar</ButtonRegister>
    </ButtonsProps>
  );
};
