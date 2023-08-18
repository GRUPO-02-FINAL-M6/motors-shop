import { useContext } from "react";
import { Header } from "../../components/Header";
import { StyledAdvertiser, StyledProfileDiv } from "./style";
import { AdsContext } from "../../providers/adsProvider";
import { ButtonCreateAdvertiser } from "../../components/Buttons";
import { Card } from "../../components/Card";
import { UserContext } from "../../providers/userProvider";
import { ModalCreateAds } from "../../components/Modal/ModalCreateAds";
import { RegisterFormAds } from "../../components/Form/FormAds";

export const AdvertiserPage = () => {
  const { ads } = useContext(AdsContext);
  const { setModalIsOpen, modalIsOpen } = useContext(UserContext);

  return (
    <>
      <Header />
      <StyledAdvertiser>
        <div></div>
        <section>
          <StyledProfileDiv>
            <span id="icon">SM</span>
            <div>
              <h2>Sandra</h2> <span id="typeProfile">Anunciante</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at! Fugiat vel, ipsum suscipit provident illo
              blanditiis ad incidunt iste doloremque cumque assumenda mollitia
              voluptates, quae natus. Vitae, voluptatibus pariatur!
            </p>
            <ButtonCreateAdvertiser onClick={() => setModalIsOpen(true)} />
            {modalIsOpen && <ModalCreateAds children={<RegisterFormAds />} />}
          </StyledProfileDiv>
          <main>
            <ul>
              {ads.map((ads) => (
                <Card ads={ads} key={ads.id} />
              ))}
            </ul>
          </main>
        </section>
      </StyledAdvertiser>
    </>
  );
};
