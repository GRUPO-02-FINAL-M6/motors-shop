import { iAds } from "../../providers/adsProvider";
import { UserIcon } from "../User-icon";
import { StyledCard } from "./style";

interface CardProps {
    ads: iAds
}

export const Card = ({ads}: CardProps) => {

  return (
    <StyledCard>
      <img
        src={ads.images[0]}
        alt={ads.name}
      />
      <h2 className="card-title">{ads.name}</h2>
      <p className="card-description">{ads.description}</p>
      <UserIcon name={ads.user.name}/>
      <div className="card-bottom">
        <div>
          <h4>{Number(ads.km).toLocaleString("pt-br") + " km"}</h4>
          <h4>{ads.year}</h4>
        </div>
        <h2>{Number(ads.value).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</h2>
      </div>
    </StyledCard>
  );
};
