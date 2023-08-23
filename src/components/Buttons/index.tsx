import {
  StyledButton,

} from "./style";


interface iButtonProps {
  type: "button" | "submit" | undefined | "reset";
  text: string;
  classType?: string;
  click: () => any;
}
export const Button = ({ text, type, classType, click }: iButtonProps) => {
  return (
    <StyledButton>
      <button className={classType} type={type} onClick={() => {click()}}> {text} </button>
    </StyledButton>
  )
};



