import { ButtonClearFilters } from "../Buttons"
import { StyledDivHome } from "./style"

export const Home = () => {
    return(
        <StyledDivHome>
            <div>
                <p>${Marca}</p>
                <span>Teste</span>
            </div>
         
            <div>
                <p>Modelo</p>
                <span>Teste</span>
            </div>
            <div>
            <p>Cor</p>
            <span>Teste</span>
            </div>

            <div>
            <p>Combustível</p>
            <span>Teste</span>
            </div>
            <div>
            <p>Km</p>
            <span>Teste</span>

            </div>
            <div>
            <p>Preço</p>
            <span>Teste</span>
            </div>

            <ButtonClearFilters/>











        </StyledDivHome>


    )}