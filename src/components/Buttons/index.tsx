import {
  StyledButton,

} from "./style";


<<<<<<< HEAD
interface iButtonProps{
  type: "button"|"submit"| undefined | "reset";
  text: string;
  classType?:string;
  click?: () => void;
}

export const Button = ({text, type, classType, click}:iButtonProps) => {
  return <StyledButton>
  <button className={classType} type={type} onClick={click}>{text}</button>
=======
interface iButtonProps {
  type: "button" | "submit" | undefined | "reset";
  text: string;
  classType?: string;
  click: () => void;
}
export const Button = ({ text, type, classType, click }: iButtonProps) => {
  return <StyledButton>
    <button className={classType} type={type} onClick={() => {
      click();
    }}>{text}</button>
>>>>>>> dc993a9e3716a0beb9ed434f5f034ed79c240854
  </StyledButton>
};



