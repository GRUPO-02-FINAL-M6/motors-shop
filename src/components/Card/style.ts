import { styled } from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  max-width: 320px;
  width: 320px;
  height: max-content;
  border-radius: 6px;
  position: relative;

  /* border: 1px solid; */

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

  .image {
    width: 100%;
    height: 200px;

    & img {
      width: 100%;
      height: 100%;
    }
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
    text-overflow: ellipsis;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey--scale--grey-2);
    word-spacing: nowrap;
  }

  .card-bottom {
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        gap: 5px;
      }
      div {
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
    }

    display: flex;
    justify-content: space-between;
    /* align-items: center; */

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
  .buttonsCard {
    display: flex;
    justify-content: flex-start;
    max-width:max-content;
    flex-direction: row;
    margin-top: 10px;

    button {
      border: 1.5px solid var(--grey--scale--grey-0);
      border-radius: 4px;
      padding:8px 15px;
      font-weight: 600;
      
    }
  }
`;
