import { useContext } from "react";
import { AdsContext } from "../../providers/adsProvider";
import { Card } from "../../components/Card";

export const DashBoardPage = () => {
  const {ads} = useContext(AdsContext)

  return (
    <>
    <h1>DashBoard Page</h1>
    {
      ads.map(ads => <Card ads={ads} key={ads.id}/>)
    }
    </>
  );
};
