import { useContext, useEffect, useState } from "react";
import { apiFipe } from "../../../services/api";
import { StyledSelect } from "./style";
import { UserContext } from "../../../providers/userProvider";

export const SelectBrend = () => {
  const { brandSelected, setBrandSelected } = useContext(UserContext);

  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const getAllBrands = async () => {
      const brends = await apiFipe.get("/cars");
      setKeys(Object.keys(brends.data).map((chave) => chave));
    };
    getAllBrands();
  }, []);

  const handleSelectChange = (e: any) => {
    const newValue = e.target.value;
    if (newValue == "") {
      setBrandSelected(null);
    }
    setBrandSelected(newValue);
  };

  return (
    <StyledSelect
      value={brandSelected ? brandSelected : ""}
      onChange={handleSelectChange}
      name=""
      id=""
    >
      <option key={"rewesd"} value="">
        Selecione uma marca
      </option>
      {keys.map((key) => (
        <option key={key} value={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </option>
      ))}
    </StyledSelect>
  );
};
