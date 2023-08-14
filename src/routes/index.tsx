import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { DashBoardPage } from "../pages/dashboard/DashBoardPage";
import { RegisterPage } from "../pages/register";
import { ProtectedRoutes } from "./protectRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/DashBoard" element={<DashBoardPage />} />
      </Route>
    </Routes>
  );
};
