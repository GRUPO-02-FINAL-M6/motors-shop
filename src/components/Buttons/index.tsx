import { StyledButtonAdsCreateImageGallery, StyledButtonAdvertiser, StyledButtonBuy, StyledButtonBuyer, StyledButtonCanceled, StyledButtonComment, StyledButtonCreateAds, StyledButtonDeleteAds, StyledButtonDeleteProfile, StyledButtonEdit, StyledButtonFinishRegister, StyledButtonGoForLogin, StyledButtonRegister, StyledButtonSaveUpdate, StyledButtonSeeDetails, StyledButtonViewAds, StyledButtonViewAllAds, StyledClearFilters, StyledFilters, StyledYesButtonDeleteAds } from "./style";

export const ButtonViewAds = () => {
    return <StyledButtonViewAds>Ver anúncios</StyledButtonViewAds>;

}
interface IbuttonClear {
    clearFilter: React.Dispatch<React.SetStateAction<string>>
}
export const ButtonClearFilters = ({ clearFilter }: IbuttonClear) => {
    return <StyledClearFilters onClick={() => clearFilter("")} className="alingCenter">Limpar filtros</StyledClearFilters>;
}

export const ButtonFilters = () => {
    return <StyledFilters>Filtros</StyledFilters>;
}

export const ButtonRegister = () => {
    return <StyledButtonRegister>Cadastrar</StyledButtonRegister>;
}

export const ButtonViewAllAds = () => {
    return <StyledButtonViewAllAds>Ver todos anúncios</StyledButtonViewAllAds>;
}

export const ButtonComment = () => {
    return <StyledButtonComment>Comentar</StyledButtonComment>;
}

export const ButtonBuy = () => {
    return <StyledButtonBuy>Comprar</StyledButtonBuy>;
}

export const ButtonGoForLogin = () => {
    return <StyledButtonGoForLogin>Fazer login</StyledButtonGoForLogin>;
}

export const ButtonFinishRegister = () => {
    return <StyledButtonFinishRegister type="submit">Finalizar cadastro</StyledButtonFinishRegister>;
}

export const ButtonBuyer = ({ ...res }) => {
    return <StyledButtonBuyer {...res} type="button" >Comprador</StyledButtonBuyer>;
}


export const ButtonAdvertiser = ({ ...res }) => {
    return <StyledButtonAdvertiser {...res} type="button" >Anunciante</StyledButtonAdvertiser>;
}

export const ButtonCreateAdvertiser = () => {
    return <StyledButtonCreateAds>Criar anúncio</StyledButtonCreateAds>;
}



export const ButtonEdit = () => {
    return <StyledButtonEdit>Editar</StyledButtonEdit>;
}

export const ButtonSeeDetails = () => {
    return <StyledButtonSeeDetails>Ver detalhes</StyledButtonSeeDetails>;
}

export const ButtonDeleteAds = () => {
    return <StyledButtonDeleteAds>Excluir anúncio</StyledButtonDeleteAds>;
}

export const ButtonSaveUpdateAds = () => {
    return <StyledButtonSaveUpdate>Excluir anúncio</StyledButtonSaveUpdate>;
}

export const ButtonCanceled = () => {
    return <StyledButtonCanceled>Cancelar</StyledButtonCanceled>;
}

export const ButtonDeleteProfile = () => {
    return <StyledButtonDeleteProfile>Excluir Perfil</StyledButtonDeleteProfile>;
}

export const ButtonYesDeleteAds = () => {
    return <StyledYesButtonDeleteAds>Sim, excluir anúncio</StyledYesButtonDeleteAds>;
}

export const ButtonAdsCreateImageGallery = () => {
    return <StyledButtonAdsCreateImageGallery>Adicionar campo para imagem da galeria</StyledButtonAdsCreateImageGallery>;
}