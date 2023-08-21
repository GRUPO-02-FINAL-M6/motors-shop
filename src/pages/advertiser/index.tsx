import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { StyledAdvertiser, StyledProfileDiv } from "./style";
import { Button } from "../../components/Buttons";
import { Card } from "../../components/Card";
import { UserContext } from "../../providers/userProvider";
import { ModalCreateAds } from "../../components/Modal/ModalCreateAds";
import { RegisterFormAds } from "../../components/Form/FormAds";
import { api } from "../../services/api";
// import { useParams } from "react-router-dom";



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
      {loading ? "" : 
      <StyledAdvertiser>
        <div></div>
        <section>
      

          <StyledProfileDiv>
            <span id="icon">{getInitiations(Advertiser.name)}</span>
            <div>
              <h2>{Advertiser.name}</h2> <span id="typeProfile">Anunciante</span>
            </div>
            <p className="pDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
              <Button onClick={() => setModalIsOpen(true)} />
            {
              modalIsOpen &&
              <ModalCreateAds>
                <RegisterFormAds />
              </ModalCreateAds>}
          </StyledProfileDiv>
            <ul>
              {ads ?
                ads.map((ads) => (
                  <Card ads={ads} key={ads.id} user={Advertiser} />
                )) :
                <p>Esse usuario ainda não tem anuncios</p>
              }
            </ul>
        </section>
      </StyledAdvertiser>}
    </>
  );
};
