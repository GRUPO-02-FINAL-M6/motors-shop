import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 15px;
  height: 73px;
  top: 20px;
  left: 20px;

  input {
    width: 15px;
    height: 48px;
    top: 25px;
    padding: 0px 16px 0px 16px;
    border-radius: 4px;
    border: 1.5px;
    gap: 10px;
    border: 1.5px solid var(--grey--scale--grey-7);
    background: var(--grey--scale--grey-7);

    &:hover {
      border: 1.5px solid #5126ea;
      background: linear-gradient(0deg, #5126ea, #5126ea);
    }
  }
`;

export const StyledTextField = styled(TextField)`
  display: flex;
  align-items: center;
  justify-content: center;

  
  label {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 15px;
  }

  input {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    width: 400px;
  }

 
`;
