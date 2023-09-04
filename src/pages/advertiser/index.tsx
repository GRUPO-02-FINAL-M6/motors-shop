import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { StyledAdsList, StyledAdvertiser, StyledProfileDiv } from "./style";
import { Button } from "../../components/Buttons";
import { Card } from "../../components/Card";
import { UserContext } from "../../providers/userProvider";
import { RegisterFormAds } from "../../components/Form/FormAds";
import { Footer } from "../../components/Footer";
// import { EditFormAds } from "../../components/Form/FormEditAds";
import { api } from "../../services/api";
import { MainStyled } from "../home/style";
import { useParams } from "react-router-dom";
import { AdsContext } from "../../providers/adsProvider";
import { Modal } from "../../components/Modal/Modal";
import { getInitiations } from "../../utils";

export const AdvertiserPage = () => {
  const { adsUser, setAdsUser } = useContext(AdsContext);

  const [Advertiser, setUser] = useState({});
  const { token, user } = useContext(UserContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ modalIsOpen,setModalIsOpen] = useState(false);
  
  
  useEffect(() => {
    const getUser = async () => {
      api
        .get(`/users/profile/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
        .then((res) => {
          setAdsUser(res.ads);
          setUser(res);
          setLoading(false);
        });
    };
    getUser();
    if (user && id) {
      if (user.id === +id) {
        setUser(user);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <MainStyled>
        {loading ? (
          ""
        ) : (
          <StyledAdvertiser>
            <div></div>
            <section>
              <StyledProfileDiv>
                <div id="profile">
                  <span id="icon">{getInitiations(Advertiser.name)}</span>
                  <div className="name">
                    <h2>{Advertiser.name}</h2>{" "}
                    <span id="typeProfile">Anunciante</span>
                  </div>
                </div>
                <p className="pDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Impedit
                  rerum laborum ut a cupiditate, eveniet voluptatum eligendi
                  cumque doloribus asperiores laudantium numquam sapiente
                  nostrum beatae suscipit corrupti culpa eius illo.
                  alskjflasdkjfl;sakj
                </p>
                {user!.id === +id! ? (
                  <Button
                    text={"Criar Anuncio"}
                    type={"button"}
                    click={() => setModalIsOpen(true)}
                    classType="buttonCreateAds"
                  />
                ) : (
                  ""
                )}
                {modalIsOpen ?(
                  <Modal toggleModal={setModalIsOpen}>
                    <RegisterFormAds />
                  </Modal>
                ): ""}
              </StyledProfileDiv>
              <StyledAdsList>
                {adsUser.map((item) => {
                  return <Card ads={item} user={Advertiser} />;
                })}
              </StyledAdsList>
            </section>
          </StyledAdvertiser>
        )}
      </MainStyled>
      <Footer />
    </>
  );
};