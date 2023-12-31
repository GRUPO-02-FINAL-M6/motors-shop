import styled from "styled-components";

export const StyledMain = styled.div`
  
  display: flex;
  flex-direction: column;

  gap: 50px;

  position: relative;

  align-items: center;

  .greenCover {
    width: 100vw;
    height: 441px;

    border-radius: 0%;

    background-color: var(--brand--brand1);
  }

  .moveUp{
    position: absolute;
    top: 40px;
  }

  // Conteudo geral
  .container{

    width: 100%;

    transform: translateY(-450px);

    display: grid;

    position: relative;


    gap: 20px;

    @media (min-width: 768px) {
      width: 80%;
    }

    @media (min-width: 1024px){
      grid-template-columns: auto auto;
    }


  }

  // DIVS
  .content { 
    background-color: var(--colors--fixed--white-fixed);
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;

    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.1));
  }

  
  .adsInformations {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  
    & .imagem {
      height: 300px;
      justify-content: center;
      align-items: center;


      & img{
        max-width: 100%;
        max-height: 100%;
        scale: 90%;
      }
    }

    .carInfo {
      align-items: normal;
      justify-content: normal;
      padding: 24px;
      gap: 25px;

      & h1 {
        width: 100%;
        font-size: 1.2rem;
      }

      #spans{
        width: fit-content;
        display: flex;
        gap: 15px;
        justify-content: space-between;

        span {
          background-color: var(--brand--brand4);
          color: var(--brand--brand2);
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
        }
      }

      & p {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }

    .description{
      gap: 20px;
      padding: 20px;

      & h2{
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }

  .moreInfomation{
    
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    @media (min-width: 1024px) {
      transform: translateY(-136px);
      position: sticky;
      top: 10px;
    }

    @media (min-width: 1114px) {
      transform: translateY(-121px);
      top: 580px;
    }

    @media (min-width: 1280px) {
      transform: translateY(-98px);
      top: 560px;
    }

    @media (min-width: 1440px) {
      transform: translateY(-66px);
      top: 520px;
    }

    @media (min-width: 1900px) {
      transform: translateY(-23px);
      top: 480px;
    }

    @media (min-width: 2560px){
      transform: translateY(30px);
      top: 430px;
    }


    .pictures{

      display: flex;
      justify-content: center;
      gap: 20px;

      padding: 20px;

      & ul {
        width: 100%;

        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: calc(auto + 10px) calc(auto + 10px);
        gap: 5px;

        & li{
          width: 100%;
        }

      }

      & img{
        width: 100%;
      }
    }
  }

  .commentsSection{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

  }
`;



export const StyledProfileDiv = styled.div`
  width: 100%;
  max-width: 1240px;
  height: fit-content;
  max-height: 406px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 20px;

  padding: 1.5rem;

  background-color: var(--colors--fixed--white-fixed);


  #profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .name {
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  #typeProfile {
    width: fit-content;
    height: fit-content;

    background-color: var(--brand--brand4);

    color: var(--brand--brand1);

    padding: 3px;
  }

  .pDescription {
    max-height: 80px;
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #icon {
    width: fit-content;
    height: fit-content;
    background-color: var(--brand--brand1);
    color: var(--colors--fixed--white-fixed);
    font-size: 2rem;
    padding: 1rem;
    border-radius: 100%;
  }
`;