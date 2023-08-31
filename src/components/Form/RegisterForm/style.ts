import styled from "styled-components";

export const StyledDivRegister = styled.form`
  width: max-content;
  height: 1, 630px;
  border-radius: 4px;
  background-color: var(--colors--fixed--white-fixed);
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-bottom: 20px;
  filter: drop-shadow(2px 2px 10px gray);
  gap: 6px;

  .account-type {
    display: flex;
    flex-direction: column;
    max-width: 258px;
    select {
      max-width: 100%;
      padding: 8px;
      border-radius: 8px;
      border: 1px solid grey;
    }
  }

  @media (max-width: 600px) {
    max-width: 380px;
    width: 85%;

    flex-direction: column;

    input {
      width: 100%;
      display: flex;
    }
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
    margin-bottom: 20px;
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
  }
`;
