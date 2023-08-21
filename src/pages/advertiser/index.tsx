import { useContext } from "react";
import { Header } from "../../components/Header";
import { StyledAdvertiser, StyledProfileDiv } from "./style";
import { AdsContext } from "../../providers/adsProvider";
import { Button } from "../../components/Buttons";
import { Card } from "../../components/Card";
import { UserContext } from "../../providers/userProvider";
import { ModalCreateAds } from "../../components/Modal/ModalCreateAds";
import { RegisterFormAds } from "../../components/Form/FormAds";
import { Footer } from "../../components/Footer";
import { StyledFooter } from "../../components/Footer/style";
import { EditFormAds } from "../../components/Form/FormEditAds";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { EditAddressForm } from "../../components/Form/FormEditAddress";

export const AdvertiserPage = () => {
  const { ads } = useContext(AdsContext);
  console.log(ads);
  const { setModalIsOpen, modalIsOpen } = useContext(UserContext);

  return (
    <>
      <Header />
      {/* <StyledAdvertiser>
        <div>#</div>
        <section>
      

          <StyledProfileDiv>
            <span id="icon">SM</span>
            <div>
              <h2>Sandra</h2> <span id="typeProfile">Anunciante</span>
            </div>
            <p className="pDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button
              type={"button"}
              text={"Criar anúncio"}
              classType="buttonCreateAds"
              onClick={()=> setModalIsOpen(true)}
            />
          { 
        
           modalIsOpen && 
           <ModalCreateAds>
              <RegisterFormAds />
            </ModalCreateAds>}
          </StyledProfileDiv>
    






            <ul>
              {ads.map((ads) => (
                <Card ads={ads} key={ads.id} />
              ))}
            </ul>

         
        </section>
      

      </StyledAdvertiser> */}
     {/* <EditFormAds/> */}
   <EditAddressForm/>

      {/* <Footer/> */}
    </>
  );
};
