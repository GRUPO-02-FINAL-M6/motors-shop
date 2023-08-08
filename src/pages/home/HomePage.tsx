import { useContext } from "react";
import { Card } from "../../components/Card";
import { AdsContext } from "../../providers/adsProvider";

export const HomePage = () => {
  const { ads } = useContext(AdsContext);

  return (
    <>
      <div>DASHBOARD</div>
      <ul>
        {ads.map((ads) => (
          <Card ads={ads} key={ads.id} />
        ))}
      </ul>
    </>
  );
};
