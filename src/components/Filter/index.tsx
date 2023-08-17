import { useState, useEffect } from "react"
import { ButtonClearFilters } from "../Buttons"
import { StyledFilterList } from "./style"
import { FilterTopics } from "./Filter";
import { api } from "../../services/api";
import FilterValuesRange from "../FilterValuesRange";

interface iFiltersParams{
  minPrice: number,
  maxPrice: number,
  distinctBrands: Array<string>,
  distinctColors: Array<string>,
  distinctYears: Array<number>,
  maxKm: number,
  distinctModels: Array<string>,
  fuel: {
    "flex": "Gasolina / Etanol",
    "hybrido": "Gasolina / Elétrico",
    "Eletrico": "Elétrico"
  }
}


export const Filter = () => {

  const [filters, setFilters] = useState({} as iFiltersParams);  

  const [load, setLoad] = useState(true);

  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [color, setColor] = useState(null);
  const [year, setYear] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minKm, setMinKm] = useState(null);
  const [maxKm, setMaxKm] = useState(null)
  

  async function fetchData() {
    await api.get('/filters')
      .then(res => {
        console.log(res.data)
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
        load ? <p>loading</p> : 
        <StyledFilterList>
          <FilterTopics name="Marca" data={filters.distinctBrands} set={setBrand}/>
          <FilterTopics name="Modelo" data={filters.distinctModels} set={setModel}/>
          <FilterTopics name="Cor" data={filters.distinctColors} set={setColor}/>
          <FilterTopics name="Ano" data={filters.distinctYears} set={setYear}/>
          <FilterTopics name="Combustível" data={["Elétrico", "Flex", "Híbrido"]} set={setFuel} />

          <div>
            <p>Preço</p>
            <FilterValuesRange min={filters.minPrice} max={filters.maxPrice} onChange={({ min, max }) => {
              setMaxPrice(max)
              setMinPrice(min)
            }}
            />
          </div>

          <div>
            <p>Km</p>
            <FilterValuesRange min={0} max={filters.maxKm} onChange={({ min, max }) => {
              setMinKm(min)
              setMaxKm(max)
            }}/>
          </div>

          <ButtonClearFilters />

        </StyledFilterList>
      }
    </>
  )
}