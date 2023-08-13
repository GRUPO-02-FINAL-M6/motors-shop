// import { Header } from "../components/Header";

import {
  ButtonAdvertiser,
  ButtonBuy,
  ButtonBuyer,
  ButtonCanceled,
  ButtonClearFilters,
  ButtonComment,
  ButtonCreateAdvertiser,
  ButtonDeleteAds,
  ButtonDeleteProfile,
  ButtonEdit,
  ButtonFilters,
  ButtonFinishRegister,
  ButtonGoForLogin,
  ButtonRegister,
  ButtonSaveUpdateAds,
  ButtonSeeDetails,
  ButtonViewAds,
  ButtonViewAllAds,
  ButtonYesDeleteAds,
} from "../../components/Buttons";
import { Footer } from "../../components/Footer";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Header } from "../../components/Header";
import { StyledMain } from "./style";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <ButtonRegister />
        <ButtonViewAllAds />
        <ButtonComment />
        <ButtonBuy />
      </StyledMain>
      <Footer />
      <ButtonDeleteAds />
      <ButtonSaveUpdateAds />
      <ButtonCanceled />
      <ButtonDeleteProfile />
      <ButtonYesDeleteAds />
    </>
  );
};
