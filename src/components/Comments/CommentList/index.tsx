import { BsDot } from 'react-icons/bs';
import { getInitiations, randomColor } from '../../../utils';
import { StyledComments, StyledCommentsList, Comment } from './styled';




export const Comments = ({...res}) => {
  return (
    <StyledComments {...res}>
      <h2>Comentários</h2>

      <StyledCommentsList>
        <Comment $primary={randomColor()}>
          <span className="user">
            <span className="icon">{getInitiations("Júlia Lima")}</span>
            <p>Júlia Lima</p>
            <BsDot className="dot" />
            <p className="time">há 3 dias</p>
          </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae qui placeat dignissimos voluptatibus, saepe hic recusandae vitae dolor, illo fuga atque accusamus est impedit accusantium laborum maiores corrupti quidem aliquam.</p>
        </Comment>
        <Comment $primary={randomColor()}>
          <span className="user">
            <span className="icon">{getInitiations("Marcos Antônio")}</span>
            <p>Marcos Antônio</p>
            <BsDot className="dot"/>
            <p className="time">há 7 dias</p>
          </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae qui placeat dignissimos voluptatibus, saepe hic recusandae vitae dolor, illo fuga atque accusamus est impedit accusantium laborum maiores corrupti quidem aliquam.</p>
        </Comment>
        <Comment $primary={randomColor()}>
          <span className="user">
            <span className="icon">{getInitiations("Camila Silva")}</span>
            <p>Camila Silva</p>
            <BsDot className="dot" />
            <p className="time">há 3 dias</p>
          </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae qui placeat dignissimos voluptatibus, saepe hic recusandae vitae dolor, illo fuga atque accusamus est impedit accusantium laborum maiores corrupti quidem aliquam.</p>
        </Comment>
      </StyledCommentsList>

    </StyledComments>
  )
}