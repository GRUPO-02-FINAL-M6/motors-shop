import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../Buttons";
import { useNavigate } from "react-router-dom";
import { ModalSuccessStyle } from "./style";

interface iModalProps {
  modalStatus: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSuccess = ({ modalStatus, setModalStatus }: iModalProps) => {
  const navigate = useNavigate();
  return (
    <ModalSuccessStyle>
      <div className="modal-top">
        <h3>Sucesso!</h3>
        <AiOutlineClose onClick={() => setModalStatus(!modalStatus)}/>
      </div>
      <div className="modal-mid">
        <h3>Sua conta foi criada com sucesso!</h3>
        <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
      </div>
      <Button
        click={() => navigate("/login")}
        text="Ir para login"
        type="button"
        classType=""
      />
    </ModalSuccessStyle>
  );
};
