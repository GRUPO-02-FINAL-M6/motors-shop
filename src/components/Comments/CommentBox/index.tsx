import { useContext, useState } from "react";
import { getInitiations } from "../../../utils"
import { Button } from "../../Buttons"
import { StyledCommentBox } from "./style"
import { api } from "../../../services/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../providers/userProvider";
import { iComment } from "../CommentList";
interface iCommentBox{
  setComments: React.Dispatch<React.SetStateAction<iComment[] | undefined>>,
  comments: iComment[] | undefined

}
export const CommentBox = ({setComments, comments}:iCommentBox) => {
  const { id } = useParams();
  const {token} = useContext(UserContext)



  const [comment, setComment] = useState('');
  const  commentData = async () =>{
    try {
      const data  = await api.post("/advertisement/"+id+"/comments",{description:comment}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setComments([...comments!,data.data])
    

      setComment("")
    } catch (error) {
      console.log(error.response.data)
      
    }
   


  }
  return (
    <StyledCommentBox>
      <div className="user">
        <span>{getInitiations("Arthur Fernandes")}</span>
        <p>Arthur Fernandes</p>
      </div>
      <textarea placeholder="Deixe seu comentário aqui..." onChange={(e) => setComment(e.target.value)} value={comment}/>
      <Button text={"Comentar"} classType="" type="button" click={() => commentData()} />
      <div className="sugest">
        <span onClick={() => setComment("Gostei muito!")}>Gostei muito!</span>
        <span onClick={() => setComment("Incrível!")}>Incrível!</span>
        <span onClick={() => setComment("Recomendarei para meus amigos!")}>Recomendarei para meus amigos!</span>
      </div>
    </StyledCommentBox>
  )
}