import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { DashBoardPage } from "../pages/dashboard/DashBoardPage";
import { RegisterPage } from "../pages/register";
import { AdvertiserPage } from "../pages/advertiser";
import { RecoverPassword } from "../pages/recoverPassword";
import { ConfirmationPassword } from "../pages/confirmationPassword";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/DashBoard" element={<DashBoardPage />} />
      <Route path="/Advertiser/:id" element={<AdvertiserPage />} />
      <Route path="/Advertiser" element={<AdvertiserPage />} />
      <Route path="/RecoverPassword" element={<RecoverPassword />} />
      <Route path="/ConfirmationPassword" element={<ConfirmationPassword />} />


      

    </Routes>
  );
};
