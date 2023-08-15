import { styled } from "styled-components";

export const CarouselStyled = styled.div`
  position: relative;
  width: 100%;

  #prev {
    position: absolute;
    top: 50%;
    color: white;
    background-color: rgba(4, 4, 4, 0.49);

    &:hover {
      background-color: rgba(4, 4, 4);
      transform: scale(1.2);
    }
  }

  #next {
    position: absolute;
    top: 50%;
    right: 0;
    color: white;
    background-color: rgba(4, 4, 4, 0.49);

    &:hover {
      background-color: rgba(4, 4, 4);
      transform: scale(1.2);
    }
  }

  img {
    width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
