import { useState } from "react";
import { getInitiations } from "../../../utils"
import { Button } from "../../Buttons"
import { StyledCommentBox } from "./style"


export const CommentBox = ({...res}) => {

  const [comment, setComment] = useState('');

  return (
    <StyledCommentBox {...res}>
      <div className="user">
        <span>{getInitiations("Arthur Fernandes")}</span>
        <p>Arthur Fernandes</p>
      </div>
      <textarea placeholder="Deixe seu comentário aqui..." onChange={(e) => setComment(e.target.value)} value={comment}/>
      <Button text={"Comentar"} classType="" type="button" click={() => false} />
      <div className="sugest">
        <span onClick={() => setComment("Gostei muito!")}>Gostei muito!</span>
        <span onClick={() => setComment("Incrível!")}>Incrível!</span>
        <span onClick={() => setComment("Recomendarei para meus amigos!")}>Recomendarei para meus amigos!</span>
      </div>
    </StyledCommentBox>
  )
}