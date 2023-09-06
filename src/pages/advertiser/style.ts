import { styled } from "styled-components";

export const StyledAdvertiser = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    height: 250px;
    background-color: var(--brand--brand1);

  }

  & > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
  }
`;

export const StyledProfileDiv = styled.div`
  width: 90%;
  max-width: 1240px;
  height: fit-content;
  max-height: 406px;
  background-color: red;

  display: flex;
  flex-direction: column;

  gap: 20px;

  padding: 1rem;

  transform: translateY(-50%);

  background-color: var(--colors--fixed--white-fixed);

  border: 1px solid;
  border-radius: 10px;

  #profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .name {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    @media (min-width: 768px) {
      align-items: start;

      .name {
        flex-direction: row;
      }
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
    overflow: hidden;
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

export const StyledAdsList = styled.ul`
  display: grid;
  margin: 0 auto;
  justify-content: center;
  gap: 100px;
  width: 100%;

  @media (min-width: 750px) {
    grid-template-columns: auto;
  }

  @media (min-width: 800px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 1066px) {
    grid-template-columns: auto auto auto;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: auto auto auto auto;
  }
`;
