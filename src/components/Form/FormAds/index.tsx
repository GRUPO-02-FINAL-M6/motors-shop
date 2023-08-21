import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AdsContext } from "../../../providers/adsProvider";
import { Button, ButtonCanceled, ButtonCreateAdvertiser } from "../../Buttons";
import Input from "../Input";
import { StyledModalCreateAds } from "./style";
import { UserContext } from "../../../providers/userProvider";
import { SelectBrend } from "../SelectBrand";
import { SelectModel } from "../SelectModel";

const createAdsSchema = z.object({
  // brand: z.string().min(1, "A marca é obrigatória"),
  // model: z.string().min(1, "O modelo é obrigatório"),
  // year: z.number().min(4, "O ano deve conter 4 dígitos."),
  km: z.string().min(5, "A kilometragem 5 dígitos."),
  // fuel: z.string(),
  color: z.string().min(1, "Deve conter a cor do veículo."),
  // priceFipe: z.number().min(5, "O valor da tabela fip é obrigatório!"),
  price: z.string().min(5, "O preço do veículo é obrigatório!"),
  description: z.string().min(1, "A descrição deve ser obrigatória"),
  images: z.string(),
});
type TRegisterAds = z.infer<typeof createAdsSchema>;

export const RegisterFormAds = () => {
  const { setModalIsOpen, globalModelSelected } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<TRegisterAds>({
    resolver: zodResolver(createAdsSchema),
  });
  const { createAds } = useContext(AdsContext);

  const createDataAds = (data: any) => {
    delete globalModelSelected.id;

    let fuel = "";

    globalModelSelected.fuel == 1
      ? (fuel = "Gasolina / Etanol")
      : "" || globalModelSelected.fuel == 2
      ? (fuel = "Gasolina / Elétrico")
      : "" || globalModelSelected.fuel == 3
      ? (fuel = "Elétrico")
      : "";

    console.log(data);

    const newData = {
      ...globalModelSelected,
      ...data,
      priceFipe: globalModelSelected.value,
      price: Number(data.price),
      year: Number(globalModelSelected.year),
      images: [data.images],
      fuel: fuel,
      km: Number(data.km),
      modelCar: globalModelSelected.name,
      priceFip: globalModelSelected.value,
    };

    delete newData.value;
    console.log(newData, "@@@@@@@@@@@");

    createAds(newData);
    // reset();
  };

  return (
    <StyledModalCreateAds onSubmit={handleSubmit(createDataAds)}>
      <div className="divTitleBtnClose">
        <h1>Criar anúncio</h1>
        <button type="button" onClick={() => setModalIsOpen(null)}>
          X
        </button>
      </div>
      <p>Informações pessoais</p>
      <div className="containerSelects">
        <SelectBrend />
        <SelectModel />
      </div>
      <div className="divOrganizationForm">
        <div className="divOrganization1">
          <Input
            label="Ano"
            type="number"
            value={globalModelSelected ? globalModelSelected.year : ""}
            register={register("year")}
            error={errors.year?.message}
            disabled={true}
          />

          <Input
            label="Quilometragem"
            type="number"
            placeholder="30.000"
            register={register("km")}
            error={errors.km?.message}
          />

          <Input
            label="Preço tabela FIPE"
            type="string"
            value={
              globalModelSelected
                ? globalModelSelected.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : ""
            }
            register={register("priceFipe")}
            error={errors.priceFipe?.message}
            disabled={true}
          />
        </div>

        <div className="divOrganization1">
          <Input
            label="Combustível"
            type="string"
            value={
              globalModelSelected
                ? globalModelSelected.fuel == 1
                  ? "Gasolina / Etanol"
                  : "" || globalModelSelected.fuel == 2
                  ? "Gasolina / Elétrico"
                  : "" || globalModelSelected.fuel == 3
                  ? "Elétrico"
                  : ""
                : ""
            }
            register={register("fuel")}
            error={errors.fuel?.message}
            disabled={true}
          />

          <Input
            label="Cor"
            type="string"
            placeholder="Branco"
            register={register("color")}
            error={errors.color?.message}
          />

          <Input
            label="Preço"
            type="string"
            placeholder={
              globalModelSelected
                ? globalModelSelected.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : ""
            }
            register={register("price")}
            error={errors.price?.message}
          />
        </div>
      </div>
      <Input
        label="Descrição"
        type="text"
        placeholder="Lorem ipsum is simply dummy text of the printing and typessetting industry. Lorem Ipsum has been the..."
        register={register("description")}
        error={errors.description?.message}
      />
      <Input
        label="Imagem"
        type="string"
        placeholder="http://image.com"
        register={register("images")}
        error={errors.images?.message}
      />

      {/* <ButtonAdsCreateImageGallery /> */}
      <div className="buttonsEdit">
        <Button type={"submit"} text={"Excluir anúncio"} classType="buttonDeleteAds" />
        <Button type={"submit"} text={"Salvar alterações"} classType="buttonSaveAds" />
      </div>
    </StyledModalCreateAds>
  );
};
