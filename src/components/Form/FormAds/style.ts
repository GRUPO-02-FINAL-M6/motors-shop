import { styled } from "styled-components";

export const StyledModalCreateAds = styled.form`
  width: 520px;
  height: 1154px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 40px;
  /* filter: drop-shadow(2px 2px 10px gray); */
  /* box-shadow: 2px 2px 10px 5px; */
  div{
    display: flex;
    justify-content: space-around;
    >h1 {
    width: 100%;
    height: 30px;
    font-family: Lexend;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
  }
  
  }
 

  p {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
  }
  .divOrganizationForm{
    display:flex ;
    
  }
  
  div#complements{
    display: grid;
    grid-template-columns: 200px 200px;

  }
  span{
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:20px;

  }

  .buttons{
    display: flex;
    justify-content: space-around;
    margin-bottom:20px;

  }
  .divBtnReegister{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;