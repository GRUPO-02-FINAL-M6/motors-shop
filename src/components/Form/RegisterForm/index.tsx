import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../Input";
import { StyledDivRegister } from "./style";
import { ComplementsInputs } from "../Input/ComplementsInput";
import { Button } from "../../Buttons";
import { UserContext } from "../../../providers/userProvider";

export const registerUserSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .email("O email deve ser obrigatório e válido")
    .min(1, "O email deve ser obrigatório"),
  cpf: z
    .string()
    .min(11, "O CPF deve conter 11 dígitos")
    .max(11, "O CPF deve conter 11 dígitos"),
  contact: z.string().min(10, "O telefone deve conter 10 dígitos"),
  birthday: z.string(),
  description: z.string().min(1, "A descrição deve ser obrigatória"),
  is_seller: z.string(),
  cep: z.string().min(8, "O CEP deve conter 8 dígitos"),
  state: z.string().min(1, "O estado deve ser obrigatório"),
  city: z.string().min(1, "A cidade deve ser obrigatória"),
  road: z.string().min(1, "A rua deve ser obrigatória"),
  number: z.string().min(1, "O número deve ser obrigatório"),
  complement: z.string().min(1, "O complemento deve ser obrigatório"),
  password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres"),

  // passwordConfirmation: z
  //   .string()
  //   .min(8, "Confirme a sua senha por favor.")
  //   .refine((value, data) => value === data.password, {
  //     message: "As senhas não coincidem",
  //     path: ["passwordConfirmation"],
  //   }),
});
type TRegisterUser = z.infer<typeof registerUserSchema>;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<TRegisterUser>({
    resolver: zodResolver(registerUserSchema),
  });
  const { registerUser } = useContext(UserContext);
  const options = [{value: false, label: "Comprador"}, {value: true, label: "Anunciante"}]
  const [is_seller, setIs_seller] = useState<boolean>(false)


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(event.target.value == "false"){
      setIs_seller(false)
    }else{
      setIs_seller(true)
    }
  }

  const handleRegisterForm = (payload: any) => {
    const newData = {...payload, is_seller}
    console.log(newData)
    registerUser(newData)
  }
  
  return (
    <StyledDivRegister
      className="formRegister"
      onSubmit={handleSubmit(handleRegisterForm)}
    >
      <h1>Cadastro</h1>

      <p>Informações pessoais</p>

      <Input
        label="Nome"
        type="text"
        placeholder="Ex: Samuel Leão"
        register={register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Email"
        type="text"
        placeholder="Ex: samuel@kenzie.com.br"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digitar senha"
        register={register("password")}
        error={errors.password?.message}
      />
      {/* <Input
        label="Confirmar senha"
        type="password"
        placeholder="Digitar senha"
        register={register("passwordConfirmation")}
        error={errors.passwordConfirmation?.message}
      /> */}
      <Input
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        register={register("cpf")}
        error={errors.cpf?.message}
      />
      <Input
        label="Celular"
        type="number"
        placeholder="(00) 00000-0000"
        register={register("contact")}
        error={errors.contact?.message}
      />

      <Input
        label="Data de nascimento"
        type="date"
        placeholder="00/00/0000"
        register={register("birthday")}
        error={errors.birthday?.message}
      />
      <Input
        label="Descrição"
        type="text"
        placeholder="Digitar descrição"
        register={register("description")}
        error={errors.description?.message}
      />
      <Input
        label="CEP"
        type="text"
        placeholder="00000-000"
        register={register("cep")}
        error={errors.cep?.message}
      />
      <Input
        label="Estado"
        type="text"
        placeholder="Digitar estado"
        register={register("state")}
        error={errors.state?.message}
      />
      <Input
        label="Cidade"
        type="text"
        placeholder="Digitar cidade"
        register={register("city")}
        error={errors.city?.message}
      />
      <Input
        label="Rua"
        type="text"
        placeholder="Digitar rua"
        register={register("road")}
        error={errors.road?.message}
      />

      <ComplementsInputs
        register1={register("number")}
        register2={register("complement")}
      />
      <div>
        {errors.number?.message && errors.number?.message}
        {errors.complement?.message && errors.complement?.message}
      </div>
      <div >
      <span>Tipo de conta</span>
        <select id="" {...register("is_seller")} onChange={(event) => {handleChange(event)}}>
          <option value="false">Cliente</option>
          <option value="true">Anunciante</option>
        </select>
      </div>
      {<p>{errors.is_seller?.message}</p>}

      <div className="divBtnReegister">
        <Button
          type={"submit"}
          text={"Finalizar cadastro"}
          classType="buttonRegisterFinished"
          click={() => {}}
        />
      </div>
    </StyledDivRegister>
  );
};
