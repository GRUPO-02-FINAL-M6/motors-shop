import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../Input";
import { StyledDivRegister } from "./style";

interface IRegisterUser {
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  birthday: string;
  description: string;
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
  password: string;
  passwordConfirmation: string;
}

interface IRegisterProps {
  setUsers: Dispatch<SetStateAction<IRegisterUser[]>>;
}

const registerUserSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .email("O email deve ser obrigatório e válido")
    .min(1, "O email deve ser obrigatório"),
  cpf: z
    .string()
    .min(11, "O CPF deve conter 11 dígitos")
    .max(11, "O CPF deve conter 11 dígitos"),
  telephone: z.string().min(10, "O telefone deve conter 10 dígitos"),
  birthday: z.string(),
  description: z.string().min(1, "A descrição deve ser obrigatória"),
  cep: z.string().min(8, "O CEP deve conter 8 dígitos"),
  state: z.string().min(1, "O estado deve ser obrigatório"),
  city: z.string().min(1, "A cidade deve ser obrigatória"),
  road: z.string().min(1, "A rua deve ser obrigatória"),
  number: z.string().min(1, "O número deve ser obrigatório"),
  complement: z.string().min(1, "O complemento deve ser obrigatório"),
  password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres"),
  passwordConfirmation: z
    .string()
    .min(8, "Confirme a sua senha por favor.")
    .refine((value, data) => value === data.password, {
      message: "As senhas não coincidem",
      path: ["passwordConfirmation"],
    }),
});
type TRegisterUser = z.infer<typeof registerUserSchema>;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterUser>({
    resolver: zodResolver(registerUserSchema),
  });

  const [formSubmitError, setFormSubmitError] = useState("");

  const registerUser = (data: TRegisterUser) => {
    console.log(data);
    // const newData = [...prevUsers, data]

    // setUsers(prevUsers => [...prevUsers, data]);
    // reset();
  };

  return (
    <StyledDivRegister>
      <h1>Cadastro</h1>


    <p>Informações pessoais</p>
      <form onSubmit={handleSubmit(registerUser)}>
        <Input
          label="name"
          type="text"
          placeholder="Ex: Samuel Leão"
          register={register("name")}
          error={errors.name?.message}
        />
        <Input
          label="email"
          type="text"
          placeholder="Ex: samuel@kenzie.com.br"
          register={register("email")}
          error={errors.email?.message}
        />
        <Input
          label="cpf"
          type="text"
          placeholder="000.000.000-00"
          register={register("cpf")}
          error={errors.cpf?.message}
        />
        <Input
          label="telephone"
          type="text"
          placeholder="(00) 00000-0000"
          register={register("telephone")}
          error={errors.telephone?.message}
        />
        <Input
          label="birthday"
          type="date"
          placeholder="00/00/0000"
          register={register("birthday")}
          error={errors.birthday?.message}
        />
        <Input
          label="description"
          type="text"
          placeholder="Digitar descrição"
          register={register("description")}
          error={errors.description?.message}
        />
        <Input
          label="cep"
          type="text"
          placeholder="00000-000"
          register={register("cep")}
          error={errors.cep?.message}
        />
        <Input
          label="state"
          type="text"
          placeholder="Digitar estado"
          register={register("state")}
          error={errors.state?.message}
        />
        <Input
          label="city"
          type="text"
          placeholder="Digitar cidade"
          register={register("city")}
          error={errors.city?.message}
        />
        <Input
          label="road"
          type="text"
          placeholder="Digitar rua"
          register={register("road")}
          error={errors.road?.message}
        />
        <Input
          label="number"
          type="text"
          placeholder="Digitar número"
          register={register("number")}
          error={errors.number?.message}
        />
        <Input
          label="complement"
          type="text"
          placeholder="Ex: apart 307"
          register={register("complement")}
          error={errors.complement?.message}
        />
        <span>Tipo de conta</span>
        <div className="buttons">
          <button type="button">Comprador</button>
          <button type="button">Anunciante</button>
        </div>

        <Input
          label="Crie uma senha"
          type="password"
          placeholder="Crie uma senha"
          register={register("password")}
          error={errors.password?.message}
        />
        <Input
          label="Confirmar senha"
          type="password"
          placeholder="Confirme a senha"
          register={register("passwordConfirmation")}
          error={errors.passwordConfirmation?.message}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </StyledDivRegister>
  );
};
