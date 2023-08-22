import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../Input";
import { ComplementsInputs } from "../Input/ComplementsInput";
import { Button } from "../../Buttons";
import { UserContext } from "../../../providers/userProvider";
import { StyledButtonsEditProfile, StyledDivRegister } from "./style";

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
  cep: z.string().min(8, "O CEP deve conter 8 dígitos"),
  state: z.string().min(1, "O estado deve ser obrigatório"),
  city: z.string().min(1, "A cidade deve ser obrigatória"),
  road: z.string().min(1, "A rua deve ser obrigatória"),
  number: z.string().min(1, "O número deve ser obrigatório"),
  complement: z.string().min(1, "O complemento deve ser obrigatório"),
  typeCount: z.string().optional(),
  password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres"),
  telephone: z.number().min(11, "O telefone deve ser obrigatório"),

  // passwordConfirmation: z
  //   .string()
  //   .min(8, "Confirme a sua senha por favor.")
  //   .refine((value, data) => value === data.password, {
  //     message: "As senhas não coincidem",
  //     path: ["passwordConfirmation"],
  //   }),
});
type TRegisterUser = z.infer<typeof registerUserSchema>;

export const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<TRegisterUser>({
    resolver: zodResolver(registerUserSchema),
  });
  const { registerUser } = useContext(UserContext);
  const [typeCount, setTypeCount] = useState("buyer");

  const createDataUser = (data: any) => {
    const newData = { ...data, typeCount: typeCount };

    registerUser(newData);
    // reset();
  };

  return (
    <StyledDivRegister
      className="formRegister"
      onSubmit={handleSubmit(createDataUser)}
    >
      <h1>Editar perfil</h1>

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
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        register={register("cpf")}
        error={errors.cpf?.message}
      />
      <Input
        label="Celular"
        type="text"
        placeholder="(00) 00000-0000"
        register={register("contact")}
        error={errors.telephone?.message}
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

      <StyledButtonsEditProfile className="buttonsEditProfile">
        <Button
          type={"submit"}
          text={"Cancelar"}
          classType="buttonCanceled"
          onClick={() => {
            setTypeCount("buyer");
          }}
        />
        <Button
          type={"submit"}
          text={"Excluir Perfil"}
          classType="buttonDeleteProfile"
          onClick={() => {
            setTypeCount("advertiser");
          }}
        />
        <Button
          type={"submit"}
          text={"Salvar alterações"}
          classType="buttonSaveEditUpdate"
          onClick={() => {
            setTypeCount("advertiser");
          }}
        />
      </StyledButtonsEditProfile>
    </StyledDivRegister>
  );
};
