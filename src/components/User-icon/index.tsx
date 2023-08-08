import { UserIconStyled } from "./style"

interface iUserName {
    name: string
}

export const UserIcon = ({name}: iUserName) => {
    return (
        <UserIconStyled className="card-ads-owner">
            <div className="card-ads-icon">{name[0].toUpperCase()}</div>
            <h3 className="card-ads-name">{name}</h3>
        </UserIconStyled>
    )
}