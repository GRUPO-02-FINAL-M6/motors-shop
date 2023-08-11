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

export const HomePage = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const { ads, createAds } = useContext(AdsContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const x = {
    name: "bolt ev premier 203cv (elétricO)",
    brand: "chevrolet",
    color: "branco",
    description:
      "Um dos carros que fez a fama da Hyundai no Brasil está de volta em nova geração. O Hyundai Azera 2020 começa a ser vendido pela importadora oficial Caoa, que cumpre assim a promessa de trazê-lo no 1º semestre deste ano. Chega em versão única com motor 3.0 V6 de 261 cv, câmbio automático de 8 marchas e o nada modesto preço de R$ 269.900.",
    km: 50000,
    fuel: "Gasolina / Etanol",
    price: 40000,
    createdAt: "2023-08-08",
    images: [
      "https://www.autocenterguapore.com.br/carros/b8800e3389102ed2867c71c1510032b5-thumbjpeg-hyundai-i30-8974161-1000-750-70.jpg",
      "https://www.autocenterguapore.com.br/carros/75cac425ef0d005436ed1ed451b749f4-thumbjpeg-hyundai-i30-8974161-1000-750-70.jpg",
    ],
    year: 2022,
    modelCar: "Hyundai",
  };

  return (
    <>
      <HeaderProps menuOpen={menuStatus}>
        <img src="../../src/assets/logo.svg" alt="" />
        <ButtonsProps menuOpen={menuStatus}>
          <ButtonLogin onClick={() => navigate("login")}>
            Fazer Login
          </ButtonLogin>
          <ButtonRegister onClick={() => navigate("register")}>
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
          <div><h1>FILTRO AQUI...</h1></div>
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
          <h3>1 de 2</h3>
          <button id="next-page" onClick={() => createAds(x)}>
            Seguinte
          </button>
        </div>
      </MainStyled>
    </>
  );
};
