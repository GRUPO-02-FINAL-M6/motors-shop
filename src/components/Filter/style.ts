import { styled } from "styled-components";

export const StyledFilterList = styled.div`
  width: 454px;
  /* border: 2px solid black; */
  padding: 20px;
  display: flex;
  flex-direction: column;
margin-top: 20px;
  gap: 30px;
  background-color: var(--colors--fixed--white-fixed);

  .divBtnCleanFilter{
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .alingCenter{
    margin: auto;
  }

  @media (max-width: 1024px) {
    display: none;
    position: absolute;
    width: 100%;
    z-index: 10;
    top: 0;
  }
`



