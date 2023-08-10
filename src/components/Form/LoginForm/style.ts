import styled from "styled-components";


export const FormContainer = styled.div`
  background-color: var(--grey--scale--grey-10);
  padding: 38px;
  margin-top: 60px;
  border-radius: 8px;
  width: 412px;
  height: 557px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
  
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: var(--grey--scale--grey-0);
  margin-bottom: 40px;
`;

export const InputEmail = styled.div`
  margin-bottom: 25px;
`;

export const Labels = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.94px;
  width: 36px;
  height: 17px;
  color: var(--grey--scale--grey-2);
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px;
  margin-bottom: 10px;
  border: 2px solid var(--grey--scale--grey-6);
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
`;

export const ForgotPasswordLink = styled.a`
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: var(--grey--scale--grey-2);
  margin-top: 5px;
`;

export const ButtonToEnter = styled.button`
  background-color: var(--brand--brand1);
  color: var(--grey--scale--grey-10);
  width: 100%;
  height: 48px;
  border: 2px solid var(--brand--brand1);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0px 30px 0px;


  &:hover {
  background-color: var(--brand--brand2);
}
  @media (max-width: 768px) {
    width: 100%;

  }
`;

export const ButtonToRegister = styled.button`
  background-color: none;
  color: var(--grey--scale--grey-0);
  width: 100%;
  height: 48px;
  border: 2px solid var(--grey--scale--grey-4);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0px 30px 0px;

  @media (max-width: 768px) {
    width: 100%;
  }
  
`;

export const SignupText = styled.p`
  font-size: 14px;
  text-align: center;
  color: var(--grey--scale--grey-2);
`;