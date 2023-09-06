import { styled } from "styled-components";

export const StyledBrand = styled.div `
 
  width: 100%;
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;

  gap: 5px;

  p {
    font-family: Lexend;
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    width: 100%;
    height: fit-content;
    font-family: Lexend;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    color: #868E96;
    cursor: pointer;
    flex-wrap: nowrap;
    text-overflow: ellipsis;

    transition: 500ms;
    
    &:hover{
      color: var(--brand--brand2)
    }
  }
  

`