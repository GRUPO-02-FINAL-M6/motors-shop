import { useContext, useEffect, useState } from "react";
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
import { ButtonFilters } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import { Filter } from "../../components/Filter";

export const HomePage = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const {
    ads,
    goToNextPage,
    goToPreviousPage,
    nextPage,
    previousPage,
    currentPage,
  } = useContext(AdsContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  useEffect(() => {}, [ads]);

  return (
    <>
      {/* <Filter/>  */}

      <HeaderProps menuOpen={menuStatus}>
        <img src="../../src/assets/logo.svg" alt="" />
        <ButtonsProps menuOpen={menuStatus}>
          <ButtonLogin onClick={() => navigate("/login")}>
            Fazer Login
          </ButtonLogin>
          <ButtonRegister onClick={() => navigate("/register")}>
            Cadastrar
          </ButtonRegister>
        </ButtonsProps>
        <HamburgerIcon onClick={toggleMenu}>
          {menuStatus ? <h2>X</h2> : <h2>☰</h2>}
        </HamburgerIcon>
      </HeaderProps>
      <MainStyled>
        <div className="background">
          <div>
            <h4>Motors Shop</h4>
            <h2>A melhor plataforma de anúncios de carros no país</h2>
          </div>
          <img src={imagem} alt="background image" />
        </div>
        <section id="main-section">
          <div>
            <h1>FILTRO AQUI...</h1>
          </div>
          <AdsSectionStyled>
            {ads.length > 0 ? (
              <ul>
                {ads.map((ads) => (
                  <Card ads={ads} key={ads.id} />
                ))}
              </ul>
            ) : (
              <div id="empty">
                <h2>Ainda não há anúncios cadastrados...</h2>
              </div>
            )}
          </AdsSectionStyled>
        </section>
        <div id="main-bottom">
          <ButtonFilters />
          <h3>{currentPage} de X páginas</h3>
          <div id="pages-btns">
          {previousPage ? (
            <button id="previous-page" onClick={() => goToPreviousPage()}>
              Anterior
            </button>
          ) : (
            <button
              id="previous-page-disabled"
              disabled={true}
            >
              Anterior
            </button>
          )}
          {nextPage ? (
            <button id="next-page" onClick={() => goToNextPage()}>
              Próxima
            </button>
          ) : (
            <button id="next-page-disabled" disabled={true}>
              Próxima
            </button>
          )}
          </div>
        </div>
      </MainStyled>
    </>
  );
};
