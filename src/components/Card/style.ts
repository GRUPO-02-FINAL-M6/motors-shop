import { styled } from "styled-components";

export const StyledCard = styled.li`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  max-width: 320px;
  height: 350px;
  border-radius: 6px;

  #stamp {
    position: absolute;
    width: 16px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: var(--random--random8);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    border-radius: 3px;
  }

  img {
    min-height: 45%;
    max-height: 45%;
    object-fit: fill;
  }

  .card-title {
    color: var(--grey--scale--grey-1);
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  .card-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey--scale--grey-2);
  }

  .card-bottom {
    font-family: "Inter", sans-serif;

    div {
      display: flex;
      gap: 8px;

      h6 {
        color: var(--brand--brand1);
        background-color: var(--brand--brand4);
        border-radius: 4px;
        padding: 8px;
      }

      h2 {
        color: var(--grey--scale--grey-1);
      }
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1024px) {
      font-size: 11px;
    }
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }

  &:hover {
    cursor: pointer;
  }

`;
