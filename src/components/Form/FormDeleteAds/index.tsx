import { Button } from "../../Buttons";
import { StyledModalDeleteAds } from "./style";

export const DeleteModalAds = () => {
 
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
          classType="buttonDeleteAdsEdit"
        />
      </div>
    </StyledModalDeleteAds>
  );
};
