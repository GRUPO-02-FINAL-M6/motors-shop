import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--grey--scale--grey-0);
  height: 120px;
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;

  
  
  h4{
       color: var( --colors--fixed--white-fixed);
      }
  
  
  @media (max-width: 600px) {
    flex-direction: column;
   padding-top:20px;
  }

  @media (max-width: 450px) {
    .nav {
      flex-direction: column;
    }
  }
`;
