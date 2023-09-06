import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../Input";
import { ComplementsInputs } from "../Input/ComplementsInput";
import { Button } from "../../Buttons";
import { UserContext } from "../../../providers/userProvider";
import { StyledButtonsEditProfile, StyledDivRegister } from "./style";
import { AiOutlineClose } from "react-icons/ai";

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
});
type TRegisterUser = z.infer<typeof registerUserSchema>;

export interface iModalStatus {
  modalStatus: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditProfileForm = ({
  modalStatus,
  setModalStatus,
}: iModalStatus) => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<TRegisterUser>({
    resolver: zodResolver(registerUserSchema),
  });
  const { updateUser, deleteUser, user } = useContext(UserContext);

  return (
    <StyledDivRegister
      className="formRegister"
      onSubmit={handleSubmit(updateUser)}
    >
      <div className="form-top">
        <h1>Editar perfil</h1>
        {/* <AiOutlineClose /> */}
      </div>

      <p>Informações pessoais</p>

      <Input
        label="Nome"
        type="text"
        placeholder={user?.name}
        register={register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Email"
        type="text"
        placeholder={user?.email}
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
        placeholder={user?.contact}
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

      <StyledButtonsEditProfile className="buttonsEditProfile">
        <div className="btns-top">
         
          <Button
            type={"button"}
            text={"Excluir Perfil"}
            classType="buttonDeleteProfile"
            click={() => deleteUser()}
          />
        </div>
        <div className="btns-bottom">
          <Button
            type={"submit"}
            text={"Salvar alterações"}
            classType="buttonSaveEditUpdate"
            click={() =>{}}
          />
        </div>
      </StyledButtonsEditProfile>
    </StyledDivRegister>
  );
};
