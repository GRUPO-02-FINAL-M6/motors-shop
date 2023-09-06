import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--grey--scale--grey-0);
  height: 120px;
  /* position: absolute; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
  bottom: 0;
/* 
  background-color: var(--grey--scale--grey-0);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 140px;
  width: 100%; */

  @media (max-width: 768px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
  }
  
  
  h4 {
    color: var( --colors--fixed--white-fixed);
  }
  
`;
