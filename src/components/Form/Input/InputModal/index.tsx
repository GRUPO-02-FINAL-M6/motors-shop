import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledContainerInputModal } from './style';



interface IInputProps {
  label: string;
  register:UseFormRegisterReturn<string>
  placeholder:string
  error?:any
  type:'text'|'password'|'email'|'number'|'date'|'string'

}

export const InputModal = ({label,register,error,type, placeholder}:IInputProps) => {
 
  return (

    <StyledContainerInputModal>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} {...register}/>
      
      <p >{error && error}</p>
      {error?<p>{error.message}</p>:null}
      
    </StyledContainerInputModal>
  );
};

