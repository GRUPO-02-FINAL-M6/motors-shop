import { useForm } from "react-hook-form";
import { Button } from "../../components/Buttons";
import { Header } from "../../components/Header";
import { MainStyled } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/userProvider";
import { z } from "zod";
import Input from "../../components/Form/Input";
import { Footer } from "../../components/Footer";

export const ConfirmationPassword = () => {
    const registerUserSchema = z.object({
        email: z
        .string()
        .email("O email deve ser obrigatório e válido")
        .min(1, "O email deve ser obrigatório"),
        password: z
        .string()
        .min(8, "A senha deve conter no mínimo 8 caracteres"),
         passwordConfirmation: z
    .string()
    .min(8, "Confirme a sua senha por favor.")
    // .refine((value, data) => value === data.password, {
    //   message: "As senhas não coincidem",
    //   path: ["passwordConfirmation"],
    // }),
});


    type TRegisterUserPassword = z.infer<typeof registerUserSchema>;
  
    const {
      register,
      formState: { errors },
    } = useForm<TRegisterUserPassword>({
      resolver: zodResolver(registerUserSchema),
    });
    const { registerUser } = useContext(UserContext);
  
    return (
      <>
        <Header />
        <MainStyled>
          <div className="containerPassword">
            <form className="recoverPasswordform">
              <h2>Confirmação de Senha</h2>
              <p>Digite a nova senha:</p>
  
              <Input
        label="Nova senha"
        type="password"
        placeholder="Digitar nova senha"
        register={register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Confirmar senha"
        type="password"
        placeholder="Confirmar senha"
        register={register("passwordConfirmation")}
        error={errors.passwordConfirmation?.message}
      />
                  <Button
                type={"submit"}
                text={"Enviar"}
                classType="buttonPassword"
                onClick={()=>{("")}}
        />
            </form>
          </div>
  
          <section id="main-section"></section>
        </MainStyled>

        <Footer/>
      </>
    );
  };
  