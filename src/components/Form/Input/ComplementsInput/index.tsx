import { UseFormRegisterReturn } from "react-hook-form";
import { StyledComponentDivComplemnts } from "./style";

export const ComplementsInputs = ({
  register1,
  register2,
}: {
  register1: any;
  register2: any;
}) => {
  return (
    <StyledComponentDivComplemnts>
      <div>
        <label>Número</label>
        <input placeholder="Digitar número" type="text" {...register1} />
      </div>

      
      <div>
        <label>Complemento</label>
        <input placeholder="ex: ap 137" type="text" {...register2} />
      </div>
    </StyledComponentDivComplemnts>
  );
};
