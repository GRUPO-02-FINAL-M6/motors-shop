import { useContext, useState } from "react";
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
import { z } from "zod";
import Input from "../../components/Form/Input";
import { Link } from "../../components/Link";

const LoginPage = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const { login } = useContext(UserContext);


  const submit = (formData) => {
    login(formData, setLoading, reset);      
 };
  const registerLoginSchema = z.object({
    email: z
      .string()
      .email("O email deve ser obrigatório e válido")
      .min(1, "O email deve ser obrigatório"),

    password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres"),
  });

  type TRegisterLogin = z.infer<typeof registerLoginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterLogin>({ resolver: zodResolver(registerLoginSchema) });

  return (
    <>
      <Header />
      <Main>
        <StyledContainerFormLoginButtons>
          <StyledDivFormLogin onSubmit={handleSubmit(submit)}>
            <div className="divTitle">
              <h2>Login</h2>
            </div>

            <Input
              label="Email"
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
              error={errors.email?.message}
            />

            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
              error={errors.password?.message}
            />
          <a>Esqueci minha senha</a>

            <StyledDivButtonsLoginForm>
              <Button type={"submit"} classType="buttonEnter" text={"Entrar"} click={() => {
    setButtonClicked(true); 
    console.log("Botão Entrar foi clicado!"); 
  }} />
              <p>Ainda não possui conta?</p>

              <Link  go={"/register"}>Cadastrar</Link>
            </StyledDivButtonsLoginForm>
          </StyledDivFormLogin>

        </StyledContainerFormLoginButtons>
      </Main>
      <Footer />
    </>
  );
};

export default LoginPage;
