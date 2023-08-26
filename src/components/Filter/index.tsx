import { useState, useEffect } from "react";
import { Button, ButtonClearFilters } from "../Buttons";
import { StyledFilterList } from "./style";
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
    flex: "Gasolina / Etanol";
    hybrido: "Gasolina / Elétrico";
    Eletrico: "Elétrico";
  };
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
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minKm, setMinKm] = useState("");
  const [maxKm, setMaxKm] = useState("");

  const clearFilter = () => {
    setBrand("");
    setModel("");
    setColor("");
    setYear("");
    setFuel("");
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
    setMaxKm("");
    setMinKm("");
    setFilter("");
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
    fetchData();
  }, []);

 useEffect(() => {
  if (brand) {
    setModel("")
  }
 }, [brand])

 useEffect(() => {
  if (model) {
    setBrand("")
  }
 }, [model])

  return (
    <>
      {
        load ? <p>loading</p> :
          <StyledFilterList>
            <Button click={clearFilter} classType="buttonCleanFilter" text="Limpar Filtros" type="button" />
            <FilterTopics name="Marca" data={filters.distinctBrands} set={setBrand} />
            <FilterTopics name="Modelo" data={filters.distinctModels} set={setModel} />
            <FilterTopics name="Cor" data={filters.distinctColors} set={setColor} />
            <FilterTopics name="Ano" data={filters.distinctYears} set={setYear} />
            <FilterTopics name="Combustível" data={["Elétrico", "Flex", "Híbrido"]} set={setFuel} />

            <div className="range">
              <p>Preço</p>
              <FilterValuesRange min={filters.minPrice} max={filters.maxPrice} onChange={({ min, max }) => {
                setMaxPrice(max)
                setMinPrice(min)
              }}
              />
            </div>

            <div className="range">
              <p>Km</p>
              <FilterValuesRange min={0} max={filters.maxKm} onChange={({ min, max }) => {
                setMinKm(min)
                setMaxKm(max)
              }} />
            </div>
            

          </StyledFilterList>
      }
    </>
  );
};
