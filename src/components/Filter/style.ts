import { styled } from "styled-components";

export const StyledFilterList = styled.div`
  width: 400px;
  height: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--colors--fixed--white-fixed);

  overflow: scroll;

  position: relative;

  .divBtnCleanFilter{
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .alingCenter{
    margin: auto;
  }

  .range{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
  }

  & div > p {
    font-size: 1.5rem;
    font-weight: 600;

  }

  @media (max-width: 1024px) {
    display: none;
    position: absolute;
    width: 100%;
    z-index: 10;
    top: 0;
  }
`



