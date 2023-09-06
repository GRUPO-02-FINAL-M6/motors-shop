import { styled } from "styled-components";
import { randomColor } from '../../../utils/randomColor';

export const StyledCommentBox = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;

  gap: 20px;
  .user{
    display: flex;
    gap: 10px;

    align-items: center;

    & span{
      background-color: var(--brand--brand1);
      
      padding: 10px;

      border-radius: 100%;

      color: var(--colors--fixed--white-fixed);
    }
  }

  & textarea{
    width: 90%;
    height: 100px;


    border: 1.5px solid var(--grey--scale--grey-4);
    border-radius: 4px;

    resize: none; 
    overflow: auto;

    padding: 10px;

    &::placeholder {
      color: var(--grey--scale--grey-4);
    }
  }

  .sugest {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    & span{
      background-color: var(--grey--scale--grey-7);
      padding: 5px 12px;

      border: 0.5px solid var(--grey--scale--grey-7);
      border-radius: 24px;

      color: var(--grey--scale--grey-3);

      &:hover{
        border: 0.5px solid var(--brand--brand1);
        color: var(--brand--brand1);
      }
    }
  }

`;