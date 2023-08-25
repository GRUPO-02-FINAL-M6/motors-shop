import { useContext } from "react";
import { UserContext } from "../../providers/userProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Buttons";
import {
  Main,
  StyledContainerFormLoginButtons,
  StyledDivButtonsLoginForm,
  StyledDivFormLogin,
} from "./style";
import Input from "../../components/Form/Input";
import { Link } from "../../components/Link";
import { loginSchema, tLogin } from "./validator";

const LoginPage = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({ resolver: zodResolver(loginSchema) });

  return (
    <>
      <Header />
      <Main>
        <StyledContainerFormLoginButtons>
          <StyledDivFormLogin onSubmit={handleSubmit(login)}>
            <div className="divTitle">
              <h2>Login</h2>
            </div>

            <Input
              label="Email"
              type="email"
              placeholder="Digite seu email"
              register={register("email")}
              error={errors.email?.message}
            />

            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              register={register("password")}
              error={errors.password?.message}
            />
            <a>Esqueci minha senha</a>

            <StyledDivButtonsLoginForm>
              <Button
                type="submit"
                classType="buttonEnter"
                text="Entrar"
                click={() => {}}
              />
              <p>Ainda não possui conta?</p>

              <Link go={"/register"}>Cadastrar</Link>
            </StyledDivButtonsLoginForm>
          </StyledDivFormLogin>
        </StyledContainerFormLoginButtons>
      </Main>
      <Footer />
    </>
  );
};

export default LoginPage;
