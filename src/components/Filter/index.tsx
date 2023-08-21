import { useState, useEffect } from "react"
import { ButtonClearFilters } from "../Buttons"
import { StyledFilterList } from "./style"
import { FilterTopics } from "./Filter";
import { api } from "../../services/api";
import FilterValuesRange from "../FilterValuesRange";

interface iFiltersParams {
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

interface IFilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
export const Filter = ({ setFilter }: IFilterProps) => {

  const [filters, setFilters] = useState({} as iFiltersParams);
  const [load, setLoad] = useState(true);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minKm, setMinKm] = useState("");
  const [maxKm, setMaxKm] = useState("");
  
  const clearFilter = () => {
    setBrand("");
    setModel("");
    setColor("");
    setYear("");
    setFuel("");
    setMinPrice(filters.minPrice.toString());
    setMaxPrice(filters.maxPrice.toString());
    setMaxKm("");
    setMinKm("");
  }

  useEffect(() => {
    const filter = `brand=${brand}&year=${year}&color=${color}&fuel=${fuel}&valueMin=${minPrice}&valueMax=${maxPrice}&kmMin=${minKm}&kmMax=${maxKm}&modelCar=${model}`;
    setFilter(filter);
  }, [brand, model, color, year, fuel, minPrice, maxPrice, minKm, maxKm]);

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
        load ? <p>loading</p> :
          <StyledFilterList>
            <FilterTopics name="Marca" data={filters.distinctBrands} set={setBrand} />
            <FilterTopics name="Modelo" data={filters.distinctModels} set={setModel} />
            <FilterTopics name="Cor" data={filters.distinctColors} set={setColor} />
            <FilterTopics name="Ano" data={filters.distinctYears} set={setYear} />
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
              }} />
            </div>

            <ButtonClearFilters clearFilter={clearFilter} />

          </StyledFilterList>
      }
    </>
  )
}