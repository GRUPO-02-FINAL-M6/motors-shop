import { useContext, useEffect, useState } from "react";
import { apiFipe } from "../../../services/api";
import { StyledSelect } from "./style";
import { UserContext } from "../../../providers/userProvider";
import { SelectBrend } from "../SelectBrand";

export const SelectModel = () => {
  const { brandSelected, globalModelSelected, setglobalModelSelected } =
    useContext(UserContext);
  const [model, setModel] = useState<any>(null);
  const [modelSelected, setModelSelected] = useState<any>(null);

  useEffect(() => {
    const getAllBrands = async () => {
      const link = `/cars?brand=${brandSelected}`;

      try {
        const models = await apiFipe.get(link);
        setModel(models.data);
      } catch (error) {
        console.log("error");
      }
    };

    if (brandSelected) getAllBrands();
    if (!brandSelected) setModel(null);
  }, [brandSelected]);

  const handleSelectChange = (e: any) => {
    const newValue = e.target.value;
    setModelSelected(newValue);
    setglobalModelSelected(model.filter((e: any) => e.name == newValue)[0]);
  };

  return (
    <StyledSelect
      value={modelSelected ? modelSelected : ""}
      onChange={handleSelectChange}
      name=""
      id=""
    >
      <option value="">Selecione um modelo</option>
      {model &&
        model!.map((e: any) => {
          return (
            <option key={e.name} value={e.name}>
              {e.name}
            </option>
          );
        })}
    </StyledSelect>
  );
};
