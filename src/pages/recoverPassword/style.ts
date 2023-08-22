import { styled } from "styled-components";

export const MainStyled = styled.main`
  .background {
    position: relative;
    width: 100vw;
    height: 86vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: justify;
      position: absolute;
      top: 16px;

      font-family: "Lexend";
      color: white;
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: center;

      h4 {
        font-family: Lexend;
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 1rem;
      }

      h2 {
        font-family: Lexend;
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
      }
    }

    img {
      width: 170%;
      position: absolute;
      z-index: -1;

      @media (min-width: 1024px) {
        width: auto;
      }
    }
  }

  #main-bottom {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 1024px) {
      > button {
        display: none;
      }
    }
  }

  #pages {
    display: flex;
    gap: 8px;
    font-family: "Lexend";
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--grey--scale--grey-3);

    .total-pages {
      color: var(--grey--scale--grey-4);
    }
  }

  #pages-btns {
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
  }

  #next-page,
  #previous-page {
    font-family: "Lexend";
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--brand--brand2);
  }

  #next-page-disabled,
  #previous-page-disabled {
    font-family: "Lexend";
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--grey--scale--grey-3);

    & {
      cursor: not-allowed;
    }
  }

  #main-section {
    width: fit-content;
    display: flex;
    flex-direction: row;
    /* align-items: end; */
    #main-section {
      width: fit-content;
      display: flex;
      flex-direction: row;

     
    }
  }
`;

export const AdsSectionStyled = styled.section`
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 100vw;
    padding: 50px;
    overflow: scroll;

    li {
      margin-left: 50px;
    }
  }
  @media (max-width: 600px) {
  ul {
    display: flex;
    flex-direction: row;
  }
}

  #empty {
    display: flex;
    justify-content: center;
    padding: 5rem 0 5rem 0;
  }

  @media (min-width: 375px) {
    ul {
      gap: 1rem;
    }
  }

  @media (max-width: 1024px) {
    /* width: 1000px; */
    ul {
      height: 100%;
      display: grid;
      grid-template-columns: 400px;
      grid-template-rows: 400px;
    }
  }
  @media (max-width: 1023px) {
    ul {
      justify-content: start;
    }
  }
`;
