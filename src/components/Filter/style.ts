import { styled } from "styled-components";

export const StyledFilterList = styled.div`
  width: 20%;
  border: 2px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: var(--colors--fixed--white-fixed);

  .alingCenter{
    margin: auto;
  }

  @media (max-width: 720px) {
    display: none;
    position: absolute;
    width: 100%;
    z-index: 10;
    top: 0;
  }

  @media (max-width: 1024px) {
    width: 25%;
    z-index: 10;
  }
`



