import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledContainerInput } from './style';



interface IInputProps {
  label: string;
  register:UseFormRegisterReturn<string>
  placeholder:string
  error?:any
  type:'text'|'password'|'email'|'number'|'date'|'string'

}

const Input = ({label,register,error,type, placeholder}:IInputProps) => {
 
  return (

    <StyledContainerInput>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} {...register}/>
      
      <p >{error && error}</p>
      {error?<p>{error.message}</p>:null}
      
    </StyledContainerInput>
  );
};

export default Input;
