import { styled } from "styled-components";

export const MainStyled = styled.main`

  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  width: 100vw;
  position: relative;

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

  #main-section{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: normal;
    }
  }

  #main-bottom {
    width: 100%;
    padding-bottom: 4rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    gap: 2rem;
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
    color: var(--brand-w-brand2);
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

`;

export const AdsSectionStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 40px;

    @media (min-width: 768px) {
      grid-template-columns: auto auto;
    }

    @media (min-width: 900px){
      grid-template-columns: auto auto;
    }

    @media (min-width: 1024px){
      grid-template-columns: auto auto;
    }

    @media (min-width: 1200px){
      grid-template-columns: auto auto auto;
    }

    @media (min-width: 1456px){
      grid-template-columns: auto auto auto auto; 
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
`;
