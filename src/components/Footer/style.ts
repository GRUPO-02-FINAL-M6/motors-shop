import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 35px;
    background-color: var(--grey--scale--grey-0);
    padding: 45px 59px 45px 59px;
    justify-content: space-between;

    @media (max-width: 768px) {
       flex-direction: column;
    }

    .logo {
      max-width: 230px;
    }
    .divFooter{
        background-color: var(--grey--scale--grey-0);
    }
  }


  @media (max-width: 600px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    .nav {
      flex-direction: column;
    }
  }
`;
