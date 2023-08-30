import { Button } from "../../Buttons";
import { StyledModalDeleteAds } from "./style";

export const DeleteModalAds = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm<TRegisterAds>({
  //     resolver: zodResolver(createAdsSchema),
  //   });
  //   const { createAds } = useContext(AdsContext);

  //   const createDataAds = (data: any) => {
  //     const newData = {
  //       ...data,
  //       ...globalModelSelected,
  //       priceFipe: globalModelSelected.value,
  //     };

  //     delete newData.value;
  //     console.log(newData, "@@@@@@@@@@@");

  //     createAds(newData);
  //     // reset();
  //   };

  return (
    <StyledModalDeleteAds>
      <h1>Excluir anúncio</h1>

      <p className="textQuestion">Tem certeza que deseja remover este anúncio?</p>
      <p className="textDelete">
        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
        e removerá seus dados de nossos servidores.
      </p>
      <div className="buttonsEdit">
        <Button
          type={"submit"}
          text={"Sim, excluir anúncio"}
          classType="buttonDeleteAds"
        />
      </div>
    </StyledModalDeleteAds>
  );
};
