import { styled } from "styled-components";

export const StyledComponentDivComplemnts = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 200px 200px;

  @media (max-width: 600px) {
    display: flex;
    width: 139px;
    gap: 5px;
  }

  label {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 48px;
    top: 25px;
    padding: 0px 16px 0px 16px;
    border-radius: 4px;
    /* gap: 10px; */
    border: 1.5px solid var(--grey--scale--grey-7);
    
    @media (max-width: 600px) {
      width: 139px;
    }

    &:hover {
      /* border: 1.5px solid #5126ea;
      background: linear-gradient(0deg, #5126ea, #5126ea); */
    }

  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
