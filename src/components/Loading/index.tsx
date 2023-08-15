import { LoadingStyled } from "./style"

export const LoadingAnimation = () => {
    return (
        <LoadingStyled>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <h4>Carregando...</h4>
            </div>
        </LoadingStyled>
    )
}