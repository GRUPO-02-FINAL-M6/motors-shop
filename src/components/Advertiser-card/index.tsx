import { iUser } from "../../providers/userProvider";
import { UserIcon } from "../User-icon";

interface iAdvertiser {
  user: iUser;
}

export const AdvertiserCard = (userData: iAdvertiser) => {
  return (
    <div>
      <div>
        <UserIcon name={userData.user.name} />
      </div>
      <div>
        <h2>{userData.user.name}</h2>
        <span>Anunciante</span>
      </div>
      <div>
        <p>
            Descrição do perfil do usuário aqui...
        </p>
      </div>
    </div>
  );
};
