import { styled } from "styled-components";

export const MainStyled = styled.main`

  display: flex;
  flex-direction: column;
  position: relative;

  .background {
    height: 910px !important;
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url('../../../public/home_cover.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    & > div{

      width: fit-content;

      font-size: 1.5rem;
      color: var(--colors--fixed--white-fixed);
      
      margin: 100px 0;

      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;

      @media (min-width: 600px){
        margin: 100px 50px;
      }

      @media (min-width: 768px){
        font-size: 2rem;
        text-align: start;
      }

      @media (min-width: 1920px){
        font-size: 2rem;
      }
      

    }
  }
 

  #main-section{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 50px;


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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;


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

  #empty {
    display: flex;
    justify-content: center;
    padding: 5rem 0 5rem 0;
  }
`;
