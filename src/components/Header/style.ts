import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: white;
  position: relative;
  width: 100vw;
`;

export const StyledHeaderDiv = styled.div`
  width: 100vw;
  height: 80px;
  padding: 0px 16px 0px 16px;
  border: 0px 0px 2px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  #header-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-self: center;

    img{
      &:hover{
        cursor: pointer;
      }
    }
    
    .menu {
      width: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 1024px) {
        display: none;
      }

      
    }
    

    #header-btns {
      display: none;
      margin-right: 24px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        #desktop-menu {
          position: absolute;
          top: 100%;
          display: flex;
          flex-direction: column;
          align-items: self-start;

          gap: 16px;
          height: max-content;
          padding: 18px;
          padding-left: 24px;
          width: 200px;
          background-color: white;
          z-index: 2;
          border-radius: 4px;
          animation: drop-menu-desktop 0.15s linear;

          button {
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: left;
            color: var(--grey--scale--grey-2);
          }

          @keyframes drop-menu-desktop {
            0% {
              height: 0;
              opacity: 0;
            }
            5% {
              height: 5%;
              opacity: 0.05;
            }
            10% {
              height: 10%;
              opacity: 0.1;
            }
            15% {
              height: 15%;
              opacity: 0.15;
            }
            20% {
              height: 20%;
              opacity: 0.2;
            }
            25% {
              height: 25%;
              opacity: 0.25;
            }
            30% {
              height: 30%;
              opacity: 0.3;
            }
            35% {
              height: 35%;
              opacity: 0.35;
            }
            40% {
              height: 40%;
              opacity: 0.4;
            }
            45% {
              height: 45%;
              opacity: 0.45;
            }
            50% {
              height: 50%;
              opacity: 0.5;
            }
            55% {
              height: 55%;
              opacity: 0.55;
            }
            60% {
              height: 60%;
              opacity: 0.6;
            }
            65% {
              height: 65%;
              opacity: 0.65;
            }
            70% {
              height: 70%;
              opacity: 0.7;
            }
            75% {
              height: 75%;
              opacity: 0.75;
            }
            80% {
              height: 80%;
              opacity: 0.8;
            }
            85% {
              height: 85%;
              opacity: 0.85;
            }
            90% {
              height: 90%;
              opacity: 0.9;
            }
            95% {
              height: 95%;
              opacity: 0.95;
            }
            100% {
              height: 100%;
              opacity: 1;
            }
          }

        }
      }

      @media (min-width: 1024px) {
        display: block;
      }
    }
  }
`;

export const HeaderLinksStyled = styled.div`
  height: 184px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  z-index: 1;
  background-color: white;
  width: 100vw;

  div {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      width: 90%;
      height: 48px;
      padding: 12px 28px 12px 28px;
      border-radius: 4px;
      border: 1.5px;
      gap: 10px;
    }
  }
`;
