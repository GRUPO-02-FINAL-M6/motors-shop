import { useContext, useState } from "react"
import { ButtonClearFilters } from "../Buttons"
import { StyledDivHome } from "./style"
import FilterValuesRange from "../FilterValuesRange";
import { AdsContext } from "../../providers/adsProvider";
import { Brand } from "./Brand";

import axios from "axios";
import { Model } from "./Model";
import { Color } from "./Color";
import { Year } from "./Year";
import { Fuel } from "./Fuel";
import { api } from "../../services/api";

export const Filter = async () => {

    const [minValuePrice, setMinValue] = useState(2000);
    const [maxValuePrice, setMaxValue] = useState(4000);
    const {ads,setAds} = useContext(AdsContext);


    interface iFilterParams {
        name?: string;
        brand?: string;
        year?: number;
        color?: string;
        fuel?: string;
        model?: string;
        minValuePrice?: number;
        maxValuePrice?:number;
        
      }
    const filters = async (filterParams: iFilterParams) => {
        try {
          const response = await api.get(process.env.API_URL! + "/filters", {
            params: filterParams,
          });
      
          return response.data;
      
        } catch (error) {
          console.error('Erro ao buscar anúncios:', error);
          throw error; 
        }
      };
    

    return (
        <StyledDivHome>
           <Brand name="Marca" data={["Ford", "Fiat", "Chevrolet","Honda"]} />
            <Model name="Modelo" data={["Civic", "Corolla", "Cruze","Fit"]}/>
            <Color name="Cor" data={["Azul", "Branca", "Prata"]}/>
            <Year name="Ano" data={["2022", "2021", "2020"]}/>
            <Fuel name="Combustível" data={["Elétrico", "Flex", "Híbrido"]}/>



            <div>
                <p>Km</p>
                <FilterValuesRange></FilterValuesRange>


            </div>
            <div>
                <p>Preço</p>
                <FilterValuesRange></FilterValuesRange>
            </div>

            <ButtonClearFilters />

        </StyledDivHome>


    )
}