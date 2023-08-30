import { Link } from "react-router-dom";
import { iAds } from "../../providers/adsProvider";
import { UserIcon } from "../User-icon";
import { StyledCard } from "./style";
import { Button } from '../Buttons';
import { useEffect, useState } from "react";

interface CardProps {
  ads: iAds;
  user?: any;
}
export const Card = ({ ads, user }: CardProps) => {
  const card404 = "../../assets/card-404.jpg";
  const stamp = ads.price <= ads.priceFip * 0.95 ? true : false;

  const [buttons, setButtons] = useState(false);

  return (
    <StyledCard>
      {
        stamp ? 
        (
          <div id="stamp">
            <h2>$</h2>
          </div>
        )
        :
        null
      }
     <div className="image">
        {
          ads.images.length > 0 ?
            (
              <img src={ads.images[0]} alt={ads.name} />
            )
            :
            (
              <img src={card404} alt={ads.name} />
            )
        }
     </div>
      
      <h2 className="card-title">{ads.name}</h2>
      
      <p className="card-description">{ads.description}</p>
      
      <Link id="link" to={`/Advertiser/${user? user.id : ads.user.id}`}><UserIcon name={user ? user.name : ads.user.name} /></Link>
      
      <div className="card-bottom">
      
        <div>
          <h6>{Number(ads.km).toLocaleString("pt-br") + " km"}</h6>
          <h6>{ads.year}</h6>
        </div>
      
        <h2>
          {Number(ads.price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
      
        </h2>
      </div>

      {/* <Button text={"Editar"} type={"button"} classType="buttonDeleteAds"/> */}

    </StyledCard>
  );
};
