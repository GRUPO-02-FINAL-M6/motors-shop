import { styled } from "styled-components";

export const StyledAdvertiser = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  & > div {
    width: 100%;
    height: 280px;
    background-color: var(--brand--brand1);
  }
  & section {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    ul{
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    gap: 20px;

    }
    
  }


  @media (max-width: 600px) {
    height: fit-content;
    width: 1000px;
    display: flex;

    ul {
      flex-direction: row;
      li {
        margin-left: 0;
      }
    }
  }
`;

export const StyledSectionAds = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: red;
  align-items: center;
  ul{
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

  }



  @media (max-width: 600px) {
    ul {
      display: flex;
      align-items: center;
      justify-content: center; 
      max-width: 100vw; 
      padding: 50px; 
      overflow: scroll;



      li {
      margin-left: 50px;
      
    }
    }
  }
`;

export const StyledProfileDiv = styled.div`
  /* background: var(--colors--fixed--white-fixed); */
  background-color: aqua;
  border: 0.5px solid black;
  border-radius: 10px;
  filter: drop-shadow(5px 10px 10px rgba(64, 64, 64, 0.4));
  max-width: 1240px;
  width: 90%;
  height: 406px;
  transform: translateY(-10px);
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  #icon {
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
    background-color: var(--brand--brand1);
    padding: 30px;
    color: var(--colors--fixed--white-fixed);
    font-size: 2rem;
  }
  div {
    display: flex;
    gap: 10px;
    h2 {
      font-size: 1.5rem;
    }
    #typeProfile {
      background-color: var(--brand--brand4);
      color: var(--brand--brand1);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
    }
  }
  @media (min-width: 1024px) {
    height: fit-content;
    width: 1000px;

    ul {
      width: 100%;
      flex-wrap: wrap;
      overflow: auto;
      gap: 30px;
      li {
        margin-left: 0;
      }
    }
  }
  @media (max-width: 1023px) {
    ul {
      justify-content: start;
    }
  }
`;
