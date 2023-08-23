import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../Input";
import { StyledDivButtonsEditAddress, StyledDivRegister } from "./style";
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

export const EditAddressForm = () => {
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
      <h1>Editar endereço</h1>

      <p>Informações de endereço</p>

      <Input
        label="CEP"
        type="text"
        placeholder="00000-000"
        register={register("cep")}
        error={errors.cep?.message}
      />

      <div className="divOrganizationInput">
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
      </div>

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

      <StyledDivButtonsEditAddress className="buttonsEditAddress">
        <Button
          type={"submit"}
          text={"Cancelar"}
          classType="buttonCanceled"
          click={() => {
            setTypeCount("buyer");
          }}
        />
        <Button
          type={"submit"}
          text={"Salvar alterações"}
          classType="buttonSaveEditUpdate"
          click={() => {
            setTypeCount("advertiser");
          }}
        />
      </StyledDivButtonsEditAddress>
    </StyledDivRegister>
  );
};
