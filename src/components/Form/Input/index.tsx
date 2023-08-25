import { UseFormRegisterReturn } from "react-hook-form";
import { StyledContainerInput } from "./style";

interface IInputProps {
  label: string;
  register?: UseFormRegisterReturn<string>;
  placeholder?: string;
  error?: any;
  type?: "text" | "password" | "email" | "number" | "date" | "string";
  disabled?: boolean;
  value?: string | number;
}

const Input = ({
  label,
  register,
  error,
  type,
  placeholder,
  disabled,
  value,
  
}: IInputProps) => {
  return (
    <StyledContainerInput>
      <label>{label}</label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        value={value}
        {...register}
      />

      <p>{error && error}</p>
      {error ? <p>{error.message}</p> : null}
    </StyledContainerInput>
  );
};

export default Input;
