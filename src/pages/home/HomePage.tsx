import { useContext, useState } from "react";
import { AdsContext } from "../../providers/adsProvider";
import {
  ButtonLogin,
  ButtonRegister,
  ButtonsProps,
  HamburgerIcon,
  HeaderProps,
} from "../LoginPage";
import { Card } from "../../components/Card";
import { AdsSectionStyled, MainStyled } from "./style";
import imagem from "../../assets/Photo.svg";

export const HomePage = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const { ads } = useContext(AdsContext);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  return (
    <>
      <HeaderProps menuOpen={menuStatus}>
        <img src="../../src/assets/logo.svg" alt="" />
        <ButtonsProps menuOpen={menuStatus}>
          <ButtonLogin>Fazer Login</ButtonLogin>
          <ButtonRegister>Cadastrar</ButtonRegister>
        </ButtonsProps>
        <HamburgerIcon onClick={toggleMenu}>
          {menuStatus ? <h2>X</h2> : <h2>☰</h2>}
        </HamburgerIcon>
      </HeaderProps>
      <MainStyled>
        <div className="background">
          {/* <div>
            <h4>Motors Shop</h4>
            <h2>A melhor plataforma de anúncios de carros no país</h2>
          </div> */}
          <img src={imagem} alt="background image" />
        </div>
        <AdsSectionStyled>
          <ul>
            {ads.map((ads) => (
              <Card ads={ads} key={ads.id} />
            ))}
          </ul>
        </AdsSectionStyled>
        <div>
          <button>botão de filtros</button>
              <h3>1 de 2</h3>
            <button>próxima página</button>
        </div>

      </MainStyled>
    </>
  );
};
