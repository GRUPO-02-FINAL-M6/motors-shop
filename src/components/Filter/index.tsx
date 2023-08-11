// import "dotenv/config";
import { useContext, useEffect, useState } from "react"
import { ButtonClearFilters } from "../Buttons"
import { StyledFilterList } from "./style"
import { FilterTopics } from "./Filter";
import { api } from "../../services/api";
import { FilterContext } from "../../providers/filterProvider";
import FilterValuesRange from "../FilterValuesRange";

export const Filter = () => {

  // const [minValuePrice, setMinValue] = useState(2000);
  // const [maxValuePrice, setMaxValue] = useState(4000);
  // const { ads, setAds } = useContext(AdsContext);


  // interface iFilterParams {
  //   name?: string;
  //   brand?: string;
  //   year?: number;
  //   color?: string;
  //   fuel?: string;
  //   model?: string;
  //   minValuePrice?: number;
  //   maxValuePrice?: number;
  // }

  const { filters, setFilters } = useContext(FilterContext);

  const [load, setLoad] = useState(true);

  async function fetchData() {
    await api.get('/filters')
      .then(res => {
        setFilters(res.data)
        setLoad(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {
        load ? <p>loading</p> : <StyledFilterList>
            <FilterTopics name="Marca" data={filters.distinctBrands} />
            <FilterTopics name="Modelo" data={filters.distinctModels} />
            <FilterTopics name="Cor" data={filters.distinctColors} />
            <FilterTopics name="Ano" data={filters.distinctYears} />
            <FilterTopics name="Combustível" data={["Elétrico", "Flex", "Híbrido"]} />



            <div>
              <p>Km</p>
              <FilterValuesRange></FilterValuesRange>
            </div>

            <div>
              <p>Preço</p>
              <FilterValuesRange></FilterValuesRange>
            </div>

            <ButtonClearFilters />

          </StyledFilterList>
      }
    </>
  )
}