import { styled } from "styled-components";

export const StyledButton = styled.div`
  button {
    padding: 12px 28px 12px 28px;
    border-radius: 4px;
    gap: 10px;
    border: 1.5px solid var(--grey--scale--grey-0);
    background-color: var(--grey--scale--grey-0);
    color: var(--colors--fixed--white-fixed);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 48px;

    &:hover {
      color: var(--colors--fixed--white-fixed);
      background-color: var(--grey--scale--grey-1);
    }
  }
  
  .buttonPublicAds {
    background-color: var(--colors--fixed--white-fixed);
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-4);

    &:hover {
      background-color: var(--brand--brand1);
    }
  }

  .buttonNotPublicAds {
    background-color: var(--colors--fixed--white-fixed);
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-4);

    &:hover {
      background-color: var(--brand--brand1);
    }
  }
  .buttonDeleteAds {
    background-color: var(--grey--scale--grey-5);
    color: var(--grey--scale--grey-3);

    &:hover {
      background-color: var(--brand--brand3);
    }
  }

  .buttonSaveAds {
    background-color: var(--grey--scale--grey-5);
    color: var(--grey--scale--grey-3);
    width: 152px;
    height: 48px;

    &:hover {
      background-color: var(--brand--brand3);
    }
  }
  .buttonCleanFilter {
    background-color: var(--brand--brand1);
    color: var(--colors--fixed--white-fixed);
    border: none;
    width: 279px;
    height: 38px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;

    &:hover {
      background-color: var(--brand--brand4);
      color: var(--brand--brand1);
    }
  }

  .buttonCreateAds {
    background-color: var(--colors--fixed--white-fixed);
    color: var(--brand--brand1);
    border: 1.5px solid var(--brand--brand1);

    &:hover {
      background-color: var(--brand--brand4);
      color: var(--brand--brand1);
    }
  }

  .buttonRegisterFinished {
    background-color: var(--colors--fixed--white-fixed);
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-4);
    width: 100%;
    height: 48px;

    @media (max-width: 600px) {
      width: 250px;
    }

    &:hover {
      background-color: var(--brand--brand1);
      border: none;
      color: var(--colors--fixed--white-fixed);
    }
  }

  .buttonBuyer {
    padding: 10px 20px;
    border: none;
    background-color: var(--brand--brand1);

    &:hover{
      background-color: var(--brand--brand2)
    }
  }

  .buttonAdvertiser {
    background-color: var(--colors--fixed--white-fixed);
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-4);
    width: 160px;
    height: 48px;

    &:hover {
      background-color: var(--brand--brand1);
      border: none;
      color: var(--colors--fixed--white-fixed);
      width: 150px;
      height: 38px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 600px) {
      width: 139px;
    }
  }

  .buttonMakeLogin {
    background-color: var(--colors--fixed--white-fixed);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;

    color: var(--brand--brand1);
    width: 133px;
    height: 48px;
    border: none;
    font-weight: bolder;
    &:hover {
      border: 1.5px solid var(--grey--scale--grey-4);
      background-color: var(--colors--fixed--white-fixed);
      color: var(--grey--scale--grey-1);
      font-size: 12px;
      width: 130px;
      height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonMakeRegister {
    background-color: var(--colors--fixed--white-fixed);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bolder;
    color: var(--brand--brand1);
    width: 133px;
    height: 48px;
    border: none;

    &:hover {
      background-color: var(--brand--brand2);
    }
  }

  .buttonCanceled {
    background-color: var(--grey--scale--grey-6);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--grey--scale--grey-3);
    width: 133px;
    height: 48px;
    border: none;

    &:hover {
      border: 1.5px solid var(--grey--scale--grey-1);
      background-color: var(--brand--brand3);
      color: var(--colors--fixed--white-fixed);
      font-size: 14px;
      width: 130px;
      height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonDeleteProfile {
    background-color: var(--feedback--alert-2);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--feedback--alert-1);
    width: 133px;
    height: 48px;
    border: none;

    &:hover {
      border: 1.5px solid var(--grey--scale--grey-4);
      background-color: var(--feedback--alert-3);

      color: var(--feedback--alert-1);
      font-size: 14px;
      width: 130px;
      height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonSaveEditUpdate {
    background-color: var(--grey--scale--grey-6);
    color: var(--grey--scale--grey-3);
    border: none;

    &:hover {
      background-color: var(--brand--brand3);
      color: var(--colors--fixed--white-fixed);
      font-size: 14px;
      width: 190px;
      height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonPassword {
    width: 200px;
    height: 48px;
    padding: 12px 28px 12px 28px;
    border-radius: 4px;
    border: 1.5px;
    gap: 10px;
    background-color: var(--brand--brand1);
    color: var(--colors--fixed--white-fixed);
    &:hover {
      background-color: var(--brand--brand3);
      color: var(--colors--fixed--white-fixed);
      font-size: 14px;
      width: 190px;
      height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonEnter {
    background-color: var(--brand--brand1);
    width: 286px;
    border: 2px solid var(--brand--brand1);
    font-weight: 600;
    margin: 30px 0px 30px 0px;

    &:hover {
      background-color: var(--brand--brand2);
    }
  }

  .buttonToRegister {
    background-color: var(--colors--fixed--white-fixed);
    border: 1px solid var(--grey--scale--grey-4);

    color: var(--grey--scale--grey-0);
    width: 286px;
    font-weight: 600;
    margin: 30px 0px 30px 0px;
  }
`;
