import { styled } from "styled-components";

export const StyledModalCreateAds = styled.form`
  width: 520px;
  height: max-content;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 40px;
  /* filter: drop-shadow(2px 2px 10px gray); */
  /* box-shadow: 2px 2px 10px 5px; */
  @media (max-width: 600px) {
    max-width: 380px;
    width: 85%;
    flex-direction: column;

    input {
      width: fit-content;
      display: flex;
    }

    .buttonsEdit{
      justify-content: center;
    }
  }

  .containerSelects {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .divTitleBtnClose {
    display: flex;
    justify-content: space-around;
    h1 {
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

    button {
      width: 12px;
      height: 12px;
      color: #adb5bd;
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
    color: #000000;
  }
  .divOrganizationForm {
    display: flex;
    flex-direction: row;
    gap: 10px;

    divOrganizationForm1 {
      display: flex;
      flex-direction: column;
    }
    divOrganizationForm2 {
      display: flex;
      flex-direction: column;
    }
  }

  div#complements {
    display: grid;
    grid-template-columns: 200px 200px;
  }
  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  .divBtnReegister {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divBtnsModalAds {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: end;
  }

  .divOrganization1 {
    display: flex;
    flex-direction: column;
    width: 50%;

    input {
      width: 226px;
    }
  }

  .divButtons {
    display: flex;
    gap: 10px;
    justify-content: end;
  }

  .buttonsEdit{
    display: flex;
    justify-content: right;
    gap: 10px;
    
  }
}
`;
