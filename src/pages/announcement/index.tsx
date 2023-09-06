import { Button } from "../../components/Buttons";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledMain, StyledProfileDiv } from "./style";
import { useNavigate, useParams } from 'react-router-dom';
import { Comments, iComment, iComments } from '../../components/Comments/CommentList';
import { CommentBox } from "../../components/Comments/CommentBox";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/userProvider";
import { AdsContext, iAds } from "../../providers/adsProvider";
import { api } from "../../services/api";



export const Announcement = () => {
  const card404 = "https://th.bing.com/th/id/R.1c4a3fcbe6831c38396d08a33b96262f?rik=I5m%2ferJ6D9gCJQ&[…]8dNX3tyzdRsQd7IKqlnsUx1x4pOheXDv0uvg9I8%3d&risl=&pid=ImgRaw&r=0"
  const { user } = useContext(UserContext);
  const { id } = useParams();
 const [adData, setAdData] = useState<iAds|null> (null)
 const [comments, setComments] = useState <iComment[]>()


  useEffect(()=>{
    const getAds = async  ()=>{
      const ad  = await api.get("/advertisement/"+id)
      const commentsData  = await api.get("/advertisement/"+id+"/comments")

      setAdData(ad.data)
      setComments(commentsData.data)
    console.log(commentsData)
    }

    getAds()

  },[])
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
        {adData ? (
           <div className="container">

           <section className="adsInformations">
           
             <div className="content imagem">
               {
                 screen.width < 1024 &&
                 <Carousel images={adData.images} />
               }
               {
                 screen.width >= 1024 &&
                 <div className="image">
                 {adData.images.length > 0 ? (
                   <img src={adData.images[0]} alt={adData.name} />
                 ) : (
                   <img src={card404} alt={adData.name} />
                 )}
               </div>
               }
               
             </div>
           
             <div className="content carInfo">
           
               <h1>{adData.name}</h1>
           
               <div id="spans">
                 <span>{adData.year}</span>
                 <span>{Number(adData.km).toLocaleString("pt-br") + " km"}</span>
               </div>
           
               <p>{Number(adData.price).toLocaleString("pt-br", {
               style: "currency",
               currency: "BRL",
             })}</p>
           
               <Button type="button" classType="buttonBuyer" text={"Comprar"} click={() => false} />
           
             </div>
           
             <div className="content description">
           
               <h2>Descrição</h2>
               <p> {adData.description}</p>
           
             </div>
           
           </section>
           
           <section className="moreInfomation">
           
             {
               screen.width >= 1024 && <div className="content pictures">
 
                 <h3>Fotos</h3>
 
                 <ul>
                 {adData.images.length >= 0 ? (  
                  adData.images.map(img =>{
                    return ( <li>
                    <img src={img.toString()} />
                  </li>)
                    
                    })
                 
                   ):
                   <li>
                     <img src="" />
                   </li>
                  }
                  
 
                 </ul>
 
               </div>
 
             }
 
             <StyledProfileDiv className="content">
               <div id="profile">
                 <span id="icon">{getInitiations(adData.user.name)}</span>
                 <div className="name">
                 <h2>{adData.user.name}</h2>{" "}
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
 
               <Button text={"Ver todos os anuncios"} type={"button"} click={() => navigate(`/advertiser/${user!.id}`)} />
             </StyledProfileDiv> 
          
           </section>
           
           <section className="commentsSection">
           
            {comments && <Comments   comments={comments}/>} 
 
             <CommentBox comments={comments} setComments={setComments}/>
 
           </section>
           
         </div> 
        ):
        null
        }
       
       
      </StyledMain>
      
      <Footer />

    </>
  ); 
};
