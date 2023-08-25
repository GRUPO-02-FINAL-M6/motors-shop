import { styled } from "styled-components";

export const Main = styled.main`
  background-color: var(--grey--scale--grey-8);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
`;

export const StyledContainerFormLoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: var(--colors--fixed--white-fixed);

  a {
    text-align: right;
    padding-right: 30px;
  }
`;

export const StyledDivFormLogin = styled.form`
  max-width: 343px;
  width: 100%;
  max-height: 542px;
  padding: 44px 28px 44px 28px;
  border-radius: 4px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .divTitle {
    justify-content: right;
    align-items: end;
  }
`;

export const StyledDivFormLoginButtons = styled.div`
  width: max-content;
  height: fit-content;
  border-radius: 4px;
  background-color: var(--colors--fixed--white-fixed);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  filter: drop-shadow(2px 2px 10px gray);

  /* box-shadow: 2px 2px 10px 5px; */
`;

export const StyledDivButtonsLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    background-color: var(--colors--fixed--white-fixed);
    color: var(--grey--scale--grey-0);
    width: 286px;
    font-weight: 600;
    margin: 30px 0px 30px 0px;
    padding: 12px 28px 12px 28px;
    border-radius: 4px;
    gap: 10px;
    border: 1.5px solid var(--grey--scale--grey-4);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
  }
`;

// a {
//   color: var(--grey--scale--grey-3);

//   display: block;
//   align-items: end;
//   text-align: right;
//   margin-bottom: 15px;
//   margin-right: 30px;
// }
// p {
//   color: var(--grey--scale--grey-3);
// }
// .divButtonsLoginForm {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   align-items: center;
//   justify-content: center;
//   background-color: green;
// }

// @media (max-width: 600px) {
//   max-width: 380px;
//   width: 85%;
// }
