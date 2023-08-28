import styled from "styled-components";

export const Container = styled.section`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;


  position: fixed;
  height: max-content;


  display: flex;
  justify-content: center;

  > div {
    background-color: var(--color-gray-900);
    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: max-content;


    /* background-color: red; */
  }
`;
