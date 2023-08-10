import styled from "styled-components";

interface StyledHeader {
  menuOpen: boolean;
}

export const StyledHeader = styled.header`

  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: var(--grey--scale--grey-10);
    padding: 25px 25px 25px 25px;
    justify-content: space-between;
    width:100%;


    .logo {
      max-width: 160px;
    }
    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        .btnLogin {
          color: var(--brand--brand1);
          background-color: var(--grey--scale--grey-10);
          border: none;
          font-family: Inter;
          font-size: 16px;
          font-weight: 600;
          line-height: 28px;
          letter-spacing: 0em;
          text-align: left;

        }

        .btnRegister {
          background-color: var(--grey--scale--grey-10);
          color: var(--grey--scale--grey-0);
          border: 1.5px solid #ADB5BD;
          width: 133px;
          height: 48px;
          display: flex;
          align-items: center;
          padding: 0px 60px 0px 60px;
          border: 0px 0px 2px 0px;
          justify-content:center;
          font-family: Inter;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0em;
          text-align: left;
          border-bottom: 2px solid #DEE2E6;
          background: linear-gradient(0deg, #FDFDFD, #FDFDFD),
          linear-gradient(0deg, #DEE2E6, #DEE2E6);
          border-radius: 3px;


        }
    .nav {
      display: flex;
      align-items: center;
      gap: 20px;

      
      }
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

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
  display: block;
  font-size:16px;
  }
`;