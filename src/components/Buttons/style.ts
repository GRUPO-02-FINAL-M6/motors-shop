import { styled } from "styled-components";

export const StyledButton = styled.div`
  button {
    /* padding: 12px 28px 12px 28px;
    border-radius: 4px;
    gap: 10px;
    border: 1.5px solid var(--grey--scale--grey-0);
    background-color: var(--grey--scale--grey-0);
    color: var(--colors--fixed--white-fixed);
    text-align: center;

    &:hover {
      color: var(--colors--fixed--white-fixed);
      background-color: var(--grey--scale--grey-1);
     
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    } */
  }

  .buttonPublicAds{
    background-color:  var(--colors--fixed--white-fixed);
    color:var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-4);
    width: 152px;
    height: 48px;

    &:hover {
      background-color: var(--brand--brand1);
      color: var(--colors--fixed--white-fixed);
      width: 152px;
    height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonNotPublicAds{
    background-color:  var(--colors--fixed--white-fixed);
    color:var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-4);
    width: 152px;
    height: 48px;

    &:hover {
      background-color: var(--brand--brand1);
      color: var(--colors--fixed--white-fixed);
      width: 152px;
    height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .buttonDeleteAds{
    background-color: var(--grey--scale--grey-5);
    color:var(--grey--scale--grey-3);
    width: 152px;
    height: 48px;

    &:hover {
      background-color: var(--brand--brand3);
      color: var(--colors--fixed--white-fixed);
      width: 152px;
    height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonSaveAds{
    background-color: var(--grey--scale--grey-5);
    color:var(--grey--scale--grey-3);
    width: 152px;
    height: 48px;

    &:hover {
      background-color: var(--brand--brand3);
      color: var(--colors--fixed--white-fixed);
      width: 152px;
    height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .buttonCleanFilter {
    background-color: var(--brand--brand1);
    color: var(--colors--fixed--white-fixed);
    border: none;
    width: 279px;
    height: 38px;

    &:hover {
      background-color: var(--brand--brand4);
      color: var(--brand--brand1);
      width: 252px;
      height: 38px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonCreateAds {
    background-color: var(--colors--fixed--white-fixed);
    color: var(--brand--brand1);
    border: 1.5px solid var(--brand--brand1);
    width: 160px;
    height: 38px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--brand--brand4);
      color: var(--brand--brand1);
      width: 133px;
      height: 38px;
      text-align: center;
      display: flex;
      font-size: 10px;
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
      /* width: 300px; */
      /* height: 38px; */
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttonBuyer {
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
    color: var(--grey--scale--grey-3);
    width: 133px;
    height: 48px;
    border: none;

    &:hover {
      border: 1.5px solid var(--grey--scale--grey-4);
      background-color: var(--colors--fixed--white-fixed);
      color: var(--grey--scale--grey-1);
      font-size: 10px;
      width: 130px;
      height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


  .buttonMakeRegister{
    background-color: var(--colors--fixed--white-fixed);
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
      border: 1.5px solid var(--grey--scale--grey-4);
      background-color: var(--colors--fixed--white-fixed);
      color: var(--grey--scale--grey-1);
      font-size: 14px;
      width: 130px;
      height: 48px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }


  
`;

export const StyledButtonViewAds = styled.button`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  border: 1.5px solid var(--brand--brand2);
  background-color: var(--brand--brand2);
  color: var(--colors--fixed--white-fixed);
  text-align: center;
  margin-left: 12px;
  width: 279px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 270px;
    height: 40px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButtonComment = styled.button`
  width: 108px;
  height: 38px;
  padding: 12px 20px 12px 20px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;
  color: var(--grey--scale--grey-10);
  background-color: var(--brand--brand1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 100px;
    height: 36px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButtonBuy = styled.button`
  width: 108px;
  height: 38px;
  padding: 12px 20px 12px 20px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;
  color: var(--grey--scale--grey-10);
  background-color: var(--brand--brand1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 100px;
    height: 36px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButtonGoForLogin = styled.button`
  width: 132px;
  height: 38px;
  padding: 12px 20px 12px 20px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;
  color: var(--grey--scale--grey-10);
  background-color: var(--brand--brand1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 120px;
    height: 36px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButtonFinishRegister = styled.button`
  width: 400px;
  height: 48px;
  padding: 12px 20px 12px 20px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;
  color: var(--grey--scale--grey-10);
  background-color: var(--brand--brand1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 260px;
    height: 36px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButtonBuyer = styled.button`
  width: 190px;
  height: 48px;
  padding: 12px 20px 12px 20px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;
  color: var(--grey--scale--grey-10);
  background-color: var(--brand--brand1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 120px;
    height: 36px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButtonAdvertiser = styled.button`
  width: 190px;
  height: 48px;
  padding: 12px 20px 12px 20px;
  border-radius: 4px;
  border: 1.5px solid var(--grey--scale--grey-4);
  gap: 10px;
  color: var(--grey--scale--grey-1);
  background-color: var(--colors--fixed--white-fixed);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 120px;
    height: 36px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const StyledClearFilters = styled.button`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  border: 1.5px solid var(--brand--brand2);
  background-color: var(--brand--brand2);
  color: var(--colors--fixed--white-fixed);
  text-align: center;
  margin-left: 12px;
  width: 279px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 270px;
    height: 40px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledFilters = styled.button`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  border: 1.5px solid var(--brand--brand2);
  background-color: var(--brand--brand2);
  color: var(--colors--fixed--white-fixed);
  text-align: center;
  margin-left: 12px;
  width: 279px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButtonRegister = styled.button`
  width: 133px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;
  border: 1.5px solid var(--grey--scale--grey-6);

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 119px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledButtonCreateAds = styled.button`
  width: 160px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;
  border: 1.5px solid var(--brand--brand1);
  color: var(--brand--brand1);
  background-color: var(--colors--fixed--white-fixed);

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 150px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledButtonEdit = styled.button`
  width: 80px;
  height: 38px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1.5px solid var(--grey--scale--grey-0);
  color: vvar(--grey--scale--grey-0);

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 150px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledButtonSeeDetails = styled.button`
  width: 130px;
  height: 38px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1.5px solid var(--grey--scale--grey-0);
  color: vvar(--grey--scale--grey-0);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 150px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledButtonDeleteAds = styled.button`
  width: 159px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  color: var(--grey--scale--grey-2);
  background-color: var(--grey--scale--grey-6);
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 150px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledButtonSaveUpdate = styled.button`
  width: 159px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  color: var(--colors--fixed--white-fixed);
  background-color: var(--brand--brand3);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 150px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledButtonCanceled = styled.button`
  width: 126px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  color: var(--grey--scale--grey-0);
  background-color: var(--grey--scale--grey-6);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 150px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledButtonDeleteProfile = styled.button`
  width: 165px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  color: var(--feedback--alert-1);
  background-color: var(--feedback--alert-2);
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 150px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;
export const StyledYesButtonDeleteAds = styled.button`
  width: 211px;
  height: 48px;
  padding: 12px 28px 12px 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  color: var(--feedback--alert-1);
  background-color: var(--feedback--alert-2);
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    color: var(--grey--scale--grey-0);
    border: 1.5px solid var(--grey--scale--grey-0);
    width: 150px;
    height: 38px;
    text-align: center;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledButtonAdsCreateImageGallery = styled.button`
  width: 315px;
  height: 38px;
  padding: 12px 20px 12px 20px;
  border-radius: 4px;
  border: 1.5px;
  gap: 10px;
  color: var(--brand--brand1);
  background-color: var(--grey--scale--grey-6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-bottom: 40px;

  &:hover {
    color: var(--brand--brand1);
    background-color: var(--brand--brand4);
    width: 315px;
    height: 36px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
