import imagem from "../../assets/Photo.svg";
import { useContext, useEffect, useRef, useState } from "react";
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
import { ButtonFilters } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import { Filter } from "../../components/Filter";
// import { Filter } from "../../components/Filter";

export const HomePage = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const {
    ads,
    goToNextPage,
    goToPreviousPage,
    nextPage,
    previousPage,
    currentPage,
    totalPages,
  } = useContext(AdsContext);
  const navigate = useNavigate();

  const targetRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  
  useEffect(() => {
  }, [ads]);

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
          <AdsSectionStyled ref={targetRef}>
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
          <div id="pages">
            <h3 id="current-page">{currentPage}</h3>
            <h3 className="total-pages">de</h3>
            <h3 className="total-pages">{totalPages}</h3>
          </div>
          <div id="pages-btns" onClick={handleButtonClick}>
            {previousPage ? (
              <button id="previous-page" onClick={() => goToPreviousPage()}>
                Anterior
              </button>
            ) : (
              <button id="previous-page-disabled" disabled={true}>
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
        <Filter /> 
      </MainStyled>
    </>
  );
};
