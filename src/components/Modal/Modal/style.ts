import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  
  min-height: 100%;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: var(--color-gray-900);
    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: max-content;

    /* background-color: red; */
  }
`;