
// import { Header } from "../components/Header";

import { Footer } from "../../components/Footer";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Header } from "../../components/Header";
import { StyledMain } from "./style";

export const RegisterPage = () => {
  return (
    <>
       <Header /> 
      <StyledMain>
        <RegisterForm />
      </StyledMain>
       <Footer /> 
    </>
  );
};
