import { BsDot } from "react-icons/bs";
import { getInitiations, randomColor } from "../../../utils";
import { StyledComments, StyledCommentsList, Comment } from "./styled";

export interface iComment {
  id: number;
  user: {
    id: number;
    email: string;
    name: string;
  };
  description: string;
  createdAt: string;
}
export interface iComments {
  comments: Array<iComment>;
}

export const Comments = ({comments}: iComments) => {
  return (
    <>
     { comments && 
    <StyledComments className="content">
      <h2>Comentários</h2>

      <StyledCommentsList>
        {comments.map((commentData) => {
          return (
            <Comment $primary={randomColor()}>
              <span className="user">
                <span className="icon">
                  {getInitiations(commentData.user.name)}
                </span>
                <p>(commentData.user.name)</p>
                <BsDot className="dot" />
                <p className="time"> {commentData.createdAt}</p>
              </span>
              <p>{commentData.description}</p>
            </Comment>
          );
        })}
      </StyledCommentsList>
    </StyledComments>}
    </>
   
  );
};
