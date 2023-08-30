import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AdsContext } from "../../../providers/adsProvider";
import { Button } from "../../Buttons";
import Input from "../Input";
import { StyledModalCreateAds } from "./style";
import { UserContext } from "../../../providers/userProvider";
import { SelectBrend } from "../SelectBrand";
import { SelectModel } from "../SelectModel";
import { Modal } from "../../Modal/Modal";
import { DeleteModalAds } from "../FormDeleteAds";

const createAdsSchema = z.object({
  // brand: z.string().min(1, "A marca é obrigatória"),
  // model: z.string().min(1, "O modelo é obrigatório"),
  // year: z.number().min(4, "O ano deve conter 4 dígitos."),
  km: z.string().min(5, "A kilometragem 5 dígitos."),
  // fuel: z.number().min(1, "Escolha de 1 a 3 um valor para o combustível."),
  color: z.string().min(1, "Deve conter a cor do veículo."),
  // priceFipe: z.number().min(5, "O valor da tabela fip é obrigatório!"),
  price: z.string().min(5, "O preço do veículo é obrigatório!"),
  description: z.string().min(1, "A descrição deve ser obrigatória"),
  coverImage: z.string(),
});
type TRegisterAds = z.infer<typeof createAdsSchema>;

export const EditFormAds = () => {
  const { setModalIsOpen, globalModelSelected } = useContext(UserContext);
  const [modalIsOpenDeleteAds, setModalIsOpenDeleteAds] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterAds>({
    resolver: zodResolver(createAdsSchema),
  });
  const { createAds } = useContext(AdsContext);

  const createDataAds = (data: any) => {
    const newData = {
      ...data,
      ...globalModelSelected,
      priceFipe: globalModelSelected.value,
    };

    delete newData.value;

    createAds(newData);
    // reset();
  };

  return (
    <StyledModalCreateAds onSubmit={handleSubmit(createDataAds)}>
      {modalIsOpenDeleteAds && (
        <Modal toggleModal={() => setModalIsOpenDeleteAds(false)}>
          <DeleteModalAds
            modalStatus={modalIsOpenDeleteAds}
            setModalStatus={setModalIsOpenDeleteAds}
          />
        </Modal>
      )}
      <div className="divTitleBtnClose">
        <h1>Editar anúncio</h1>
        <button type="button" onClick={() => setModalIsOpen(null)}>
          X
        </button>
      </div>
      <p>Informações do veículo</p>
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
                  ? "flex"
                  : "" || globalModelSelected.fuel == 2
                  ? "hybrid"
                  : "" || globalModelSelected.fuel == 3
                  ? "elétrico"
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
      <p>Publicado</p>
      <div className="buttonsEdit">
        <Button type={"submit"} text={"Sim"} classType="buttonPublicAds" />
        <Button type={"submit"} text={"Não"} classType="buttonNotPublicAds" />
      </div>

      <Input
        label="Imagem da capa"
        type="string"
        placeholder="http://image.com"
        register={register("coverImage")}
        error={errors.coverImage?.message}
      />

      <Input
        label="1º Imagem da galeria"
        type="string"
        placeholder="http://image.com"
        register={register("coverImage")}
        error={errors.coverImage?.message}
      />
      <Input
        label="2º Imagem da galeria"
        type="string"
        placeholder="http://image.com"
        register={register("coverImage")}
        error={errors.coverImage?.message}
      />

      {/* <ButtonAdsCreateImageGallery /> */}
      <div className="buttonsEdit">
        <Button
          type={"submit"}
          text={"Excluir anúncio"}
          classType="buttonDeleteAdsModalEdit"
          click={() => setModalIsOpenDeleteAds(true)}
        />
        <Button
          type={"submit"}
          text={"Salvar alterações"}
          classType="buttonSaveAds"
        />
      </div>
    </StyledModalCreateAds>
  );
};
