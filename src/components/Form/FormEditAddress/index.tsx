import { useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../Input";
import { StyledDivButtonsEditAddress, StyledDivRegister } from "./style";
import { ComplementsInputs } from "../Input/ComplementsInput";
import { Button } from "../../Buttons";
import { UserContext } from "../../../providers/userProvider";

export const editAddressSchema = z.object({
  cep: z.string().min(8, "O CEP deve conter 8 dígitos"),
  state: z.string().min(1, "O estado deve ser obrigatório"),
  city: z.string().min(1, "A cidade deve ser obrigatória"),
  road: z.string().min(1, "A rua deve ser obrigatória"),
  number: z.string().min(1, "O número deve ser obrigatório"),
  complement: z.string().min(1, "O complemento deve ser obrigatório"),
});

type TRegisterUser = z.infer<typeof editAddressSchema>;

export const EditAddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterUser>({
    resolver: zodResolver(editAddressSchema),
  });

  const {} = useContext(UserContext);

  const createDataUser = (data: any) => {
    console.log("Aguardando a implementação de patch do endereço no backend")
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

      <StyledDivButtonsEditAddress className="buttonsEditAddress">
        <Button
          type="submit"
          text="Salvar alterações"
          classType="buttonSaveEditUpdate"
          click={() => {}}
        />
      </StyledDivButtonsEditAddress>
    </StyledDivRegister>
  );
};
