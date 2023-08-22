import {
  StyledButton,

} from "./style";


interface iButtonProps{
  type: "button"|"submit"|"undefined";
  text:string;
  classType?:string;
  onClick?: () => void;
}
export const Button = ({text, type, classType, click}:iButtonProps) => {
  return <StyledButton>
  <button className={classType}>{text}</button>
  </StyledButton>
};



