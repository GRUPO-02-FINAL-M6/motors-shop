import { styled } from "styled-components";

export const CarouselStyled = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  max-height: 100%;
  max-width: 100%;

  & span {
    position: absolute;

    border: none;
    border-radius: 100%;
    
    width: fit-content;


    display: flex;
    justify-content: center;

    z-index: 10;

    color: var(--brand--brand1);
    

    &:active{
      background-color: rgba(11,11,11,0.8);
      color: white;
    }
  }

  .prev {
    left: 1px;
    top: 45%;
  }

  .next {
    right: 1px;
    top: 45%;
  }

`;
