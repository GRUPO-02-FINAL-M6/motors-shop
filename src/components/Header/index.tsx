import { useState, useContext, useEffect } from "react";
import { HeaderLinksStyled, StyledHeader, StyledHeaderDiv } from "./style";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import { Button } from "../Buttons";
import { UserContext } from "../../providers/userProvider";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "../User-icon";

export const Header = () => {
  const logo = "../../../public/logo.svg";
  const [menuStatus, setMenuStatus] = useState(false);
  const [desktopMenuStatus, setDesktopMenuStatus] = useState(false);
  const token = localStorage.getItem("token");
  const { logout, user, getMyProfile } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      await getMyProfile();
    };
    getUser();
  }, []);

  return (
    <StyledHeader>
      <StyledHeaderDiv>
        <div id="header-nav">
          <img src={logo} alt="motors shop" onClick={() => navigate("/")}/>
          <div id="header-btns">
            {user ? (
              <div onClick={() => setDesktopMenuStatus(!desktopMenuStatus)}>
                <UserIcon name={user!.name} />
                {desktopMenuStatus ? (
                  <div id="desktop-menu">
                    <button>Editar perfil</button>
                    <button>Editar endereço</button>
                    <button onClick={() => navigate("dashboard")}>
                      Meus anúncios
                    </button>
                    <button onClick={logout}>Sair</button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div>
                <div>
                  <Button
                    type={"submit"}
                    text={"Fazer login"}
                    classType="buttonMakeLogin"
                    click={() => navigate("/login")}
                  />
                </div>
                <div>
                  <Button
                    type={"submit"}
                    text={"Cadastrar"}
                    classType="buttonMakeRegister"
                    click={() => navigate("/register")}
                  />
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
            <Button
              type={"submit"}
              text={"Fazer login"}
              classType="buttonMakeLogin"
              click={() => navigate("/login")}
            />
            </div>
            <div onClick={() => navigate("/register")}>
            <Button
              type={"submit"}
              text={"Cadastro"}
              classType="buttonMakeRegister"
              click={() => navigate("/register")}
            />
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
