import { styled } from "styled-components";

export const UserIconStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  
  #link{
    transition: 500ms;

    &:hover{
      color: var(--brand--brand1);
    }
  }

  .card-ads-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    padding: 16px;
    color: white;
    font-size: var(--text--body-2-500);
    background-color: var(--brand--brand1);
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }

  .card-ads-name {
    color: var(--grey--scale--grey-2);
    font-family: "Inter", sans-serif;
    font-size: var(--text--body-2-500);
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  &:hover{
    cursor: pointer;
  }
`