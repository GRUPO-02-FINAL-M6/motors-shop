import React, { useState } from 'react'
import Select from 'react-select'
import { useBrands } from '../../../../hooks/useBrand'



// const optionsSelectBrand = [
    
    // { value: brand.id, label: brand.name }
//   ]
  
//   export const SelectBrand = () => (
//     <Select options={options} />
//   )

export const SelectBrand = () => {
    const [selectedBrand, setSelectedBrand] = useState("")
    const {brands,loading: loadingBrands, models} = useBrands({brand:'chevrolet'})

    const handleBrandUpdate = (event) =>{
        setSelectedBrand(event.target.value)
    }

    const brandOptions =brands.map(brand=>({
        value= brand.id
        label=brand.model
    }))


    return(
        // <Select options={optionsSelectBrand} value={selectedBrand} onChange={handleBrandUpdate}/>
        <select value={selectedBrand} onChange ={}>
            {brands.map((brand)=>(
                <option  key={brand.id} value={brand.name}></option>
            ))}
        </select>
        {loadingBrands ? <p>Carregando modelos... aguarde</p> :(
            <select>
            {models.map((model) =>(
                <option>{model.name}</option>
            ))}
            </select>
        )}
    )
}