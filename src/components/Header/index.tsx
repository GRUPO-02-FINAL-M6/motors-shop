import { useState, useContext, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { HeaderLinksStyled, StyledHeader, StyledHeaderDiv } from "./style";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import { ButtonGoForLogin, ButtonRegister } from "../Buttons";
import { UserContext } from "../../providers/userProvider";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "../User-icon";

export const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const token = localStorage.getItem("token");
  const { logout, getMyProfile, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  return (
    <StyledHeader>
      <StyledHeaderDiv>
        <div id="header-nav">
          <img src={logo} alt="motors shop" />
          <div id="header-btns">
            {token ? (
              <UserIcon name={"José Gabriel"}/>
            ) : (
              <div>
                <div onClick={() => navigate("/login")}>
                  <ButtonGoForLogin />
                </div>
                <div onClick={() => navigate("/register")}>
                  <ButtonRegister />
                </div>
              </div>
            )}
          </div>
          {menuStatus ? (
            <div className="menu" onClick={() => setMenuStatus(!menuStatus)}>
              <TfiClose size={24} />
            </div>
          ) : (
            <div className="menu" onClick={() => setMenuStatus(!menuStatus)}>
              <TfiMenu size={24} />
            </div>
          )}
        </div>
      </StyledHeaderDiv>
      {menuStatus &&
        (!token ? (
          <HeaderLinksStyled>
            <div onClick={() => navigate("/login")}>
              <ButtonGoForLogin />
            </div>
            <div onClick={() => navigate("/register")}>
              <ButtonRegister />
            </div>
          </HeaderLinksStyled>
        ) : (
          <HeaderLinksStyled>
            <button>Perfil</button>
            <button onClick={logout}>Logout</button>
          </HeaderLinksStyled>
        ))}
    </StyledHeader>
  );
};
