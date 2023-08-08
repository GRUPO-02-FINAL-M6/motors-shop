import { styled } from "styled-components";

export const MainStyled = styled.main`
  .background {
    width: 100vw;
    height: 86vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const AdsSectionStyled = styled.section`
  width: 100vw;

  ul {
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    overflow: scroll;
  }

  @media (min-width: 375px) {
    ul {
      gap: 1rem;
    }
  }
`;
