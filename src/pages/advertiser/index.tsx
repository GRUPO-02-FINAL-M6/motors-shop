import { useContext } from "react";
import { Header } from "../../components/Header";
import {  StyledAdvertiser, StyledProfileDiv } from "./style";
import { AdsContext } from "../../providers/adsProvider";
import { ButtonCreateAdvertiser } from "../../components/Buttons";

export const AdvertiserPage = () => {
  const { ads } = useContext(AdsContext);
  console.log(ads);

  return (
    <>
      <Header />
      <StyledAdvertiser>
        <div></div>
        <section>
          <StyledProfileDiv>

            <span id='icon'>SM</span>
            <div>
            <h2>Sandra</h2> <span id="typeProfile">Anunciante</span>
              </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at! Fugiat vel, ipsum suscipit provident illo
              blanditiis ad incidunt iste doloremque cumque assumenda mollitia
              voluptates, quae natus. Vitae, voluptatibus pariatur!
            </p>
            <ButtonCreateAdvertiser />
          </StyledProfileDiv>
        </section>
      </StyledAdvertiser>
    </>
  );
};
