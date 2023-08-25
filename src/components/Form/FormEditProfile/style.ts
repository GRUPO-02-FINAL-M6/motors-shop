import styled from "styled-components";

export const StyledDivRegister = styled.form`
  width: max-content;
  height: 1, 630px;
  border-radius: 4px;
  background-color: var(--colors--fixed--white-fixed);
  display: flex;
  flex-direction: column;
  padding: 40px;
  filter: drop-shadow(2px 2px 10px gray);
  gap: 37px;

  /* box-shadow: 2px 2px 10px 5px; */

  .form-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  >div{
    width: 100%;
  }

  h1 {
    width: 100%;
    height: 30px;
    font-family: Lexend;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
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
    justify-content: space-evenly;
    margin-bottom: 20px;

    @media (max-width: 600px) {
      gap: 5px;
    }
    .divBtnReegister {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`;

export const StyledButtonsEditProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  .btns-top {
    gap: 5px;
    display: flex;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
