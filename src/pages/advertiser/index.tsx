import { useState } from "react";
import { AdvertiserCard } from "../../components/Advertiser-card";
import { Card } from "../../components/Card";
import { iAdvertiserProfile } from "../../providers/adsProvider";
import { AdsSectionStyled, MainStyled } from "../home/style";
import { ModalCreateAds } from "../../components/Modal/ModalCreateAds";
import { ButtonCanceled, ButtonCreateAdvertiser } from "../../components/Buttons";
import { StyledModalCreateAds } from "../../components/Modal/ModalCreateAds/style";
import { Input } from "../LoginPage";
import { RegisterFormAds } from "../../components/Form/FormAds";



export const AdvertiserPage = () => {
  const [ isOpen, setIsOpen] = useState(false)
  // const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <h1>header aqui</h1>
      <section>
        {/* <AdvertiserCard user={}/> */}
      </section>
      <MainStyled>
        <AdsSectionStyled>
        {
   
    isOpen &&  < ModalCreateAds toggleModal={() => setIsOpen(!isOpen)} >
      <RegisterFormAds/>
      </ModalCreateAds>}
      <button onClick={() => setIsOpen(!isOpen)}>clique aqui</button>
    

    
        
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
