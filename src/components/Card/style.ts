import { styled } from "styled-components";

export const StyledCard = styled.li`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 312px;
  height: 350px;

  img {
    max-height: 40%;
  }

  .card-title {
    font-size: var(--heading---heading-6-600);
    color: var(--grey--scale--grey-1);
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  .card-description {
    font-size: var(--text--body-2-400);
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

      h4 {
        font-size: var(--text--body-2-500);
        color: var(--brand--brand1);
        background-color: var(--brand--brand4);
        border-radius: 4px;
        padding: 8px;
      }

      h2 {
        font-size: var(--heading---heading-7-500);
        color: var(--grey--scale--grey-1);
      }
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
  }
`;
