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
    }
  }

  #main-bottom {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  #next-page {
    font-family: "Lexend";
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--brand--brand2);
  }
`;

export const AdsSectionStyled = styled.section`
  width: 100vw;

  ul {
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    overflow: scroll;
    
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
`;