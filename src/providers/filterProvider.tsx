import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface iFilters{
  distinctBrands: Array<string>
  distinctModels: Array<string>
  distinctColors: Array<string>
  distinctYears: Array<string>
  fuel: {
    flex: "Gasolina / Etanol",
    hybrid: "Gasolina / Elétrico",
    electric: "Elétrico"
  },
  maxKm: number
  maxPrice: number,
  minPrice: number
}

export const FilterContext = createContext({} as any)

export const FilterProvider = ({children}: {children: React.ReactNode}) => {

  const [filters, setFilters] = useState<iFilters>({} as iFilters);

  return (
    <FilterContext.Provider value ={{filters, setFilters}}>
      {children}
    </FilterContext.Provider>
  )
}