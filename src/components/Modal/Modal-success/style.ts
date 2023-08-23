import { styled } from "styled-components";

export const ModalSuccessStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  gap: 16px;
  width: 347px;
  top: 94px;
  left: 16px;
  padding: 0px 0px 42px 0px;
  border-radius: 8px;

  .modal-top {
    width: 347px;
    height: 56px;
    padding: 16px 24px 16px 24px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .modal-mid {
    width: 347px;
    height: max-content;
    padding: 16px 24px 16px 24px;
  }

  div{
    align-self: flex-start;
    padding: 16px 24px 16px 24px;
  }
`;
