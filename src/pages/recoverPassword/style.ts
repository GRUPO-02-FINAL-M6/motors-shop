import { styled } from "styled-components";

export const MainStyled = styled.main`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .containerPassword {
    .recoverPasswordform {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      justify-content: center;


      h2{
        color: var(--brand--brand1);

      }
      p{

      }
    }
  }

  @media (max-width: 600px) {
      width: fit-content;
      padding: 20px;
    }
`;
