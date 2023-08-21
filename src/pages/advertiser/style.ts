import { styled } from "styled-components";

export const StyledAdvertiser = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

    ul {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 40px;
    }
  }
`;

export const StyledProfileDiv = styled.div`
  background: var(--colors--fixed--white-fixed);
  border: 0.5px solid black;
  border-radius: 10px;
  filter: drop-shadow(5px 10px 10px rgba(64, 64, 64, 0.4));
  max-width: 1240px;
  width: 90%;
  height: 406px;
  transform: translateY(-200px);
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
`;
