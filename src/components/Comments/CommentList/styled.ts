import { styled } from 'styled-components';


export const StyledComments = styled.div`

  padding: 20px;

  display: flex;
  flex-direction: column;

  gap: 20px;

  & h2{
    font-size: 1.5rem;
  }
`;

export const StyledCommentsList = styled.ul`
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  gap: 20px;

  overflow: scroll;
`


export const Comment = styled.li<{ $primary?: string}>`

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-bottom: 30px;

  border-bottom: 1px solid var(--grey--scale--grey-7);

  & .user{
    display: flex;
    gap: 5px;
    
    align-items: center;

    & .icon{
      
      width: 32px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 12px;
      color: white;
      font-weight: 600;

      border-radius: 100%;

      background-color: ${props => props.$primary};
    }

    & .time {
      font-size: 12px;
      color: var(--grey--scale--grey-3)
    }

    & .dot {
      color: var(--grey--scale--grey-3)
    }
  }

`