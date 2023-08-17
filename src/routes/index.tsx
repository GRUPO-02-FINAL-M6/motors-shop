import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { DashBoardPage } from "../pages/dashboard/DashBoardPage";
import { RegisterPage } from "../pages/register";
import { AdvertiserPage } from "../pages/advertiser";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/DashBoard" element={<DashBoardPage />} />
      <Route
        path="/Advertiser"
        element={<AdvertiserPage user={undefined} ads={[]} />}
      />
    </Routes>
  );
};
