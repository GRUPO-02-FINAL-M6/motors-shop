import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 315px;
  height: 73px;
  top: 20px;
  left: 20px;

  input {
    width: 315px;
    height: 48px;
    top: 25px;
    padding: 0px 16px 0px 16px;
    border-radius: 4px;
    border: 1.5px;
    gap: 10px;
    border: 1.5px solid var(--grey--scale--grey-7);
    background: var(--grey--scale--grey-7);

    &:hover{
      border: 1.5px solid #5126EA;
      background: linear-gradient(0deg, #5126EA, #5126EA);


    }
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
   font-family: Inter;
   font-size: 16px;
   font-weight: 400;
   letter-spacing: 0em;
   text-align: left;

  }

  label {
   font-family: Inter;
   font-size: 14px;
   font-weight: 500;
   line-height: 17px;
   letter-spacing: 0em;
   text-align: left;

    }
  

 
`;
