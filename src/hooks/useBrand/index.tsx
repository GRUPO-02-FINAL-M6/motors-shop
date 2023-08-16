// import {useEffect, useState} from "react";

// export interface IBrand{
//     model:string;
// }
// export interface IModel{
//     name:string;
// }

// export const useBrands = ({brand}) =>{
//     const [brands, setBrands] = useState <IBrand[]>([]);
//     const [models, setModels] = useState <IModel[]>([]);

//     const [loading, setLoading] = useState (false)

//     useEffect(() =>{
//         setLoading(true)
//         if(!brand) return
//         fetch(``)
//         .then((response) => response.json())
//         .then((data)=>setBrands(data))
//         .then(() => setLoading(false))
//     },[brand])
//     return {brands, loading, models}
// }