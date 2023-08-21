import { useContext, useEffect, useRef } from "react";
import { AdsContext } from "../../providers/adsProvider";
import { Card } from "../../components/Card";
import { AdsSectionStyled, MainStyled } from "./style";
import { ButtonFilters } from "../../components/Buttons";
import { Filter } from "../../components/Filter";
// import { Filter } from "../../components/Filter";

import { Header } from "../../components/Header";
// import { Filter } from "../../components/Filter";
const imagem = "/public/Photo.svg";
export const HomePage = () => {
  const {
    ads,
    goToNextPage,
    goToPreviousPage,
    nextPage,
    previousPage,
    currentPage,
    totalPages,
  } = useContext(AdsContext);

  const targetRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {}, [ads]);

  return (
    <>
      <Header />
      <MainStyled>
        <div className="background">
          <div>
            <h4>Motors Shop</h4>
            <h2>A melhor plataforma de anúncios de carros no país</h2>
          </div>
          <img src={imagem} alt="background image" />
        </div>
        <section id="main-section">
          <Filter /> 
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
          <ButtonFilters />
        </section>
        <div id="main-bottom">
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
        
      </MainStyled>
    </>
  );
};
