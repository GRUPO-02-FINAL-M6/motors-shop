// import { useContext} from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Input from "../../components/Form/Input";
import { MainStyled } from "./style";
import { z } from "zod";
// import { UserContext } from "../../providers/userProvider";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Buttons";
import { api } from "../../services/api";

export const RecoverPassword = () => {
  const registerUserSchema = z.object({
    email: z
      .string()
      .email("O email deve ser obrigatório e válido")
      .min(1, "O email deve ser obrigatório"),
  });
  type TRegisterUserEmail = z.infer<typeof registerUserSchema>;

const submit = async (data:any) =>{
  const dataApi  = await api.post("/recoveryPass",{email:data.email})
  console.log(dataApi)
}
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterUserEmail>({
    resolver: zodResolver(registerUserSchema),
  });
  // const { registerUser } = useContext(UserContext);

  return (
    <>
      <Header />
      <MainStyled>
        <div className="containerPassword">
          <form className="recoverPasswordform" onSubmit={handleSubmit(submit)}>
            <h2>Recuperação de Senha</h2>
            <p>Informe o seu email associado à conta para redefinir a senha.</p>

            <Input
              label="Email"
              type="text"
              placeholder="Ex: samuel@kenzie.com.br"
              register={register("email")}
              error={errors.email?.message}
            />
                <Button
              type={"submit"}
              text={"Enviar"}
              classType="buttonPassword"
              click={()=>{("")}}
      />
          </form>
        </div>

        <section id="main-section"></section>
      </MainStyled>
      <Footer />
    </>
  );
};
