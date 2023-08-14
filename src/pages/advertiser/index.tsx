import { AdvertiserCard } from "../../components/Advertiser-card";
import { Card } from "../../components/Card";
import { iAdvertiserProfile } from "../../providers/adsProvider";
import { AdsSectionStyled, MainStyled } from "../home/style";



export const AdvertiserPage = (advertiser: iAdvertiserProfile) => {
  return (
    <>
      <h1>header aqui</h1>
      <section>
        <AdvertiserCard user={advertiser.user}/>
      </section>
      <MainStyled>
        <AdsSectionStyled>
            {
                advertiser.ads.map(ads => (
                    <Card ads={ads}/>
                ))
            }
        </AdsSectionStyled>
      </MainStyled>
    </>
  );
};
