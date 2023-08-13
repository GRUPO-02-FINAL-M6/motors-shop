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

    .menu {
      width: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media(min-width: 1024px){
        display: none;
      }
    }

    #header-btns{
      display: none;

      div{
        display: flex;
        align-items: center;
        gap: 8px;
      }
      @media(min-width: 1024px){
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
