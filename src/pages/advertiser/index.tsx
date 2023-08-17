import { useContext, useState } from "react";
import { AdsSectionStyled, MainStyled } from "../home/style";
import { ModalCreateAds } from "../../components/Modal/ModalCreateAds";
import { RegisterFormAds } from "../../components/Form/FormAds";
import { UserContext } from "../../providers/userProvider";

export const AdvertiserPage = () => {
  const { modalIsOpen, setModalIsOpen } = useContext(UserContext);
  // const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <h1>header aqui</h1>
      <section>{/* <AdvertiserCard user={}/> */}</section>
      <MainStyled>
        <AdsSectionStyled>
          {modalIsOpen && (
            <ModalCreateAds toggleModal={() => setModalIsOpen(true)}>
              <RegisterFormAds />
            </ModalCreateAds>
          )}
          <button onClick={() => setModalIsOpen(true)}>clique aqui</button>

          {/* {
                advertiser.ads.map(ads => (
                    <Card ads={ads}/>
                ))
            } */}
        </AdsSectionStyled>
      </MainStyled>
    </>
  );
};
