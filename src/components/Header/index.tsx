import { useState, useContext, useEffect, SetStateAction } from "react";
import { HeaderLinksStyled, StyledHeader, StyledHeaderDiv } from "./style";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import { Button } from "../Buttons";
import { UserContext } from "../../providers/userProvider";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "../User-icon";
import { FiLogOut } from "react-icons/fi";
import { Link } from "../Link";
import { ModalCreateAds } from "../Modal/ModalCreateAds";
import { EditProfileForm } from "../Form/FormEditProfile";
import { EditAddressForm } from "../Form/FormEditAddress";
import { Modal } from "../Modal/Modal";
export const Header = () => {
  const logo = "../../../public/logo.svg";
  const [menuStatus, setMenuStatus] = useState(false);
  const [desktopMenuStatus, setDesktopMenuStatus] = useState(false);
  const token = localStorage.getItem("token");
  const [modalIsOpenEditProfile, setModalIsOpenEditProfile] = useState(false);
  const [modalIsOpenEditAddress, setModalIsOpenEditAddress] = useState(false);
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
      {modalIsOpenEditProfile && (
        <Modal toggleModal={() => setModalIsOpenEditProfile(false)}>
          <EditProfileForm modalStatus={modalIsOpenEditProfile} setModalStatus={setModalIsOpenEditProfile}/>
        </Modal>
      )}
      {modalIsOpenEditAddress && (
        <Modal toggleModal={() => setModalIsOpenEditAddress(false)}>
          <EditAddressForm />
        </Modal>
      )}
      <StyledHeaderDiv>
        <div id="header-nav">
          <Link go={"/"}>
            <img src={logo} alt="motors shop" />
          </Link>
          <div id="header-btns">
            {user ? (
              <div onClick={() => setDesktopMenuStatus(!desktopMenuStatus)}>
                <UserIcon name={user!.name} />
                {desktopMenuStatus ? (
                  <div id="desktop-menu">
                    <button onClick={() => setModalIsOpenEditProfile(true)}>
                      Editar perfil
                    </button>
                    <button onClick={() => setModalIsOpenEditAddress(true)}>
                      Editar endereço
                    </button>
                    <button>
                      <Link go={`/Advertiser/${user.id}`}>Meus anúncios</Link>
                    </button>
                    <button onClick={logout}>Sair</button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div>
                <div onClick={() => navigate("/login")}>
                  <Button
                    type={"submit"}
                    text={"Fazer login"}
                    classType="buttonMakeLogin"
                  />
                </div>
                <div onClick={() => navigate("/register")}>
                  <Button
                    type={"submit"}
                    text={"Cadastrar"}
                    classType="buttonMakeRegister"
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
                text={"Cadastro"}
                classType="buttonMakeRegister"
                click={() => navigate("/register")}
              />
            </div>
          </HeaderLinksStyled>
        ) : (
          <HeaderLinksStyled>
            <button onClick={() => navigate("/dashboard")}>Perfil</button>
            <button>Editar endereço</button>
            <button onClick={logout}>Sair</button>
          </HeaderLinksStyled>
        ))}
    </StyledHeader>
  );
};