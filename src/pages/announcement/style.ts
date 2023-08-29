import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 200px);
  position: relative;

  > div {
    background-color: var(--brand--brand1);
    width: 100vw;
    height: 441px;
    position: absolute;
    top: 0;
  }

  > section {
    display: flex;
    gap: 40px;
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;
    width: 95vw;
    min-height: max-content;

    .adsInformations {
      display: flex;
      flex-direction: column;
      width: 60%;
      gap: 50px;

      div {
        background-color: green;
        min-height: 100px;
        width: 100%;
        padding: 30px;
      }

      .imagem {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          max-width: 70%;
        }
      }
    }

    aside {
      width: 39%;
      background-color: red;
    }
  }
`;
