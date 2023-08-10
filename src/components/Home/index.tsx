import { useState } from "react"
import { ButtonClearFilters } from "../Buttons"
import { StyledDivHome } from "./style"
import FilterValuesRange from "../FilterValuesRange";

export const Home = () => {

    const [minValuePrice, setMinValue] = useState(2000);
    const [maxValuePrice, setMaxValue] = useState(4000);
    return (
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
                <FilterValuesRange></FilterValuesRange>
            </div>

            <ButtonClearFilters />

        </StyledDivHome>


    )
}