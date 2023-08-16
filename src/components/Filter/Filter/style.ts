import { styled } from "styled-components";

export const StyledBrand = styled.div `
 
  display: flex;
  flex-direction: column;

  gap: 7px;

  p {
    font-family: Lexend;
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
  }

  span {
    width: fit-content;
    height: fit-content;
    font-family: Lexend;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #868E96;
    cursor: pointer;

    transition: 500ms;
    
    &:hover{
      color: var(--brand--brand2)
    }
  }
  

`