import { Button } from "../../components/Buttons";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledMain, StyledProfileDiv } from "./style";
import { useNavigate } from 'react-router-dom';
import { Comments } from '../../components/Comments';

export const Announcement = () => {

  function getInitiations(fullName: string) {
    const names = fullName.split(" ");

    if (names.length === 1) {
      return names[0][0].toUpperCase() + names[0][1].toUpperCase();
    } else {
      let initiations = "";
      for (let i = 0; i < 2; i++) {
        initiations += names[i][0].toUpperCase();
      }
      return initiations;
    }
  }

  const navigate = useNavigate();


  return (
    <>
      <Header />
      <StyledMain>
        <div className="greenCover"/>

        <div className="container">

          <section className="adsInformations">
          
            <div className="content imagem">
              {
                screen.width < 1024 &&
                <Carousel images={["https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43-e1663185856860.jpg?quality=70&strip=info&w=1280&h=720&crop=1", "https://atri.com.br/models/fastback/colors/hero-806.png", "https://www.webmotors.com.br/imagens/prod/379407/FIAT_FASTBACK_1.0_TURBO_200_FLEX_CVT_37940717114440496.webp", "https://cdn.motor1.com/images/mgl/eob1AV/s3/fiat-fastback-2023-ganha-versao-mais-barata.webp"]} />
              }
              {
                screen.width >= 1024 &&
                <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43-e1663185856860.jpg?quality=70&strip=info&w=1280&h=720&crop=1" alt="img" />
              }
              
            </div>
          
            <div className="content carInfo">
          
              <h1>FASTBACK LIMITED EDITION TURBO 270 FLEX AT</h1>
          
              <div id="spans">
                <span>2023</span>
                <span>0 KM</span>
              </div>
          
              <p>R$ 120.000,00</p>
          
              <Button type="button" classType="buttonBuyer" text={"Comprar"} click={() => false} />
          
            </div>
          
            <div className="content description">
          
              <h2>Descrição</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus praesentium maxime eum, ipsam unde accusamus obcaecati hic vitae accusantium quidem nihil quo neque assumenda sunt laudantium, sapiente ex! Dicta.</p>
          
            </div>
          
          </section>
          
          <section className="moreInfomation">
          
            {
              screen.width >= 1024 && <div className="content pictures">

                <h3>Fotos</h3>

                <ul>
                  <li>
                    <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43-e1663185856860.jpg?quality=70&strip=info&w=1280&h=720&crop=1" alt="img" />
                  </li>
                  <li>
                    <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43-e1663185856860.jpg?quality=70&strip=info&w=1280&h=720&crop=1" alt="img" />
                  </li>
                  <li>
                    <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43-e1663185856860.jpg?quality=70&strip=info&w=1280&h=720&crop=1" alt="img" />
                  </li>
                  <li>
                    <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43-e1663185856860.jpg?quality=70&strip=info&w=1280&h=720&crop=1" alt="img" />
                  </li>
                  <li>
                    <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43-e1663185856860.jpg?quality=70&strip=info&w=1280&h=720&crop=1" alt="img" />
                  </li>
                  <li>
                    <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43-e1663185856860.jpg?quality=70&strip=info&w=1280&h=720&crop=1" alt="img" />
                  </li>

                </ul>

              </div>

            }

            <StyledProfileDiv className="content">
              <div id="profile">
                <span id="icon">{getInitiations("Arthur Fernandes")}</span>
                <div className="name">
                  <h2>Arthur Fernandes</h2>
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

              <Button text={"Ver todos os anuncios"} type={"button"} click={() => navigate('/advertiser/1')} />
            </StyledProfileDiv>
            
          </section>
          
        </div>

        <div className="container">
          <Comments className="content"/>
        </div>

      </StyledMain>
      
      <Footer />

    </>
  ); 
};
