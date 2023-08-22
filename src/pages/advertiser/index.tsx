import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { StyledAdsList, StyledAdvertiser, StyledProfileDiv } from "./style";
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
import { api } from "../../services/api";
import { EditProfileForm } from "../../components/Form/FormEditProfile";

export const AdvertiserPage = () => {

  const { setModalIsOpen, modalIsOpen } = useContext(UserContext);

  const [ads, setAds] = useState([]);

  const [Advertiser, setUser] = useState({})

  const { token } = useContext(UserContext);

  const id = 1;

  const [loading, setLoading] = useState(true);

  function getInitiations(fullName: string) {

    const names = fullName.split(' ');

    if (names.length === 1) {
      return names[0][0].toUpperCase() + names[0][1].toUpperCase();
    } else {
      let initiations = '';
      for (let i = 0; i < 2; i++) {
        initiations += names[i][0].toUpperCase();
      }
      return initiations;
    }
  }


  useEffect(() => {
    api.get(`/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.data)
      .then(res => {
        setAds(res.ads)
        setUser(res)
        setLoading(false)
      })
  })

  return (
    <>
      <Header />
      <MainStyled>
        {
          loading ? "" :

            <StyledAdvertiser>

              <div></div>

              <section>

                <StyledProfileDiv>


                  <div id="profile">
                    <span id="icon">{getInitiations(Advertiser.name)}</span>
                    <div className="name">
                      <h2>{Advertiser.name}</h2> <span id="typeProfile">Anunciante</span>
                    </div>
                  </div>

                  <p className="pDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum laborum ut a cupiditate, eveniet voluptatum eligendi cumque doloribus asperiores laudantium numquam sapiente nostrum beatae suscipit corrupti culpa eius illo. alskjflasdkjfl;sakj
                  </p>

                  <Button text={"Criar Anuncio"} type={"button"} />

                  {
                    modalIsOpen &&
                    <ModalCreateAds>
                      <RegisterFormAds />
                    </ModalCreateAds>
                  }

                </StyledProfileDiv>

                <StyledAdsList>

      {/* testando */}
     {/* <EditFormAds/> */}
   {/* <EditAddressForm/> */}

                </StyledAdsList>

              </section>

            </StyledAdvertiser>
        }
      </MainStyled>
    </>
  );
};
