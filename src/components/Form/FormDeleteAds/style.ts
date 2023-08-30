import { styled } from "styled-components";

export const StyledModalDeleteAds = styled.form`
  width: 520px;
  height: 331px;
  border-radius: 8px;
  background-color: var(--colors--fixed--white-fixed);
  padding: 20px;
  gap: 20px;
  padding: 20px;

  h1 {
    //styleName: Heading/Heading-7-500;
    font-family: Lexend;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px;
  }
  .textQuestion {
    //styleName: Heading/Heading-7-500;
    font-family: Lexend;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px;
  }
  .textDelete {
    color: var(--grey--scale--grey-3);
    //styleName: Text/body-1-400;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px;
    margin-bottom: 30px;
  }
  .buttonsEdit{
    display: flex;
    gap: 10px;
    justify-content: right;
  
}
`;
