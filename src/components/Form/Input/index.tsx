import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from './style';



interface IInputProps {
  label: string;
  register:UseFormRegisterReturn<string>
  placeholder:string
  error?:any
  type:'text'|'password'|'email'|'number'|'date'|'string'

}

const Input = ({label,register,error,type}:IInputProps) => {
 
  return (
    <fieldset>
      <StyledTextField label={label}type={type} {...register}/>
      
      <p >{error && error}</p>
      {error?<p>{error.message}</p>:null}
      
    </fieldset>
  );
};

export default Input;
