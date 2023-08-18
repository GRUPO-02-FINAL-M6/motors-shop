import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { StyledAdvertiser, StyledProfileDiv } from "./style";
import { ButtonCreateAdvertiser } from "../../components/Buttons";
import { Card } from "../../components/Card";
import { UserContext } from "../../providers/userProvider";
import { ModalCreateAds } from "../../components/Modal/ModalCreateAds";
import { RegisterFormAds } from "../../components/Form/FormAds";
import { api } from "../../services/api";

export const AdvertiserPage = () => {
  
  const { setModalIsOpen, modalIsOpen } = useContext(UserContext);

  const [ads, setAds] = useState([]);

  const [Advertiser, setUser] = useState({})

  const { token } = useContext(UserContext);

  const id = 3;

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
    })
  })

  // (Arthur Fernandes) Logica para pegar as iniciais do Anunciante...
  // function getInitiations(fullName: string) {
    
  //   const names = fullName.split(' ');

  //   if (names.length === 1) {
  //     return names[0][0].toUpperCase();
  //   } else {
  //     let initiations = '';
  //     for (let i =0; i < 2; i++) {
  //       initiations += names[i][0].toUpperCase();
  //     }
  //     return initiations;
  //   }
  // }

  return (
    <>
      <Header />
      <StyledAdvertiser>
        <div></div>
        <section>
          <StyledProfileDiv>
            <span id="icon">SS</span>
            <div>
              <h2>{Advertiser.name}</h2> <span id="typeProfile">Anunciante</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates doloribus tempore autem unde veniam minima tempora totam facere fugiat in voluptatibus maiores, suscipit quo corporis repellat non blanditiis soluta!
            </p>
            <ButtonCreateAdvertiser onClick={()=> setModalIsOpen(true)} />
          { 
        
           modalIsOpen && 
           <ModalCreateAds>
              <RegisterFormAds />
            </ModalCreateAds>}
          </StyledProfileDiv>
          <main>
            <ul>
              {ads?
                ads.map((ads) => (
                  <Card ads={ads} key={ads.id} user={Advertiser} />
                )) :
                <p>Esse usuario ainda não tem anuncios</p>
              }
            </ul>
          </main>
        </section>
      </StyledAdvertiser>
    </>
  );
};
