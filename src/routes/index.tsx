import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoardPage } from "../pages/dashboard/DashBoardPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/DashBoard" element={<DashBoardPage />} />
    </Routes>
  );
};
