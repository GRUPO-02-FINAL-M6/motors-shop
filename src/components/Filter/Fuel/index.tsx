import { StyledFuel } from "./style"


interface FuelProps {
    name: string;
    data: string[];
  }
export const Fuel: React.FC<FuelProps> = ({name, data})=> {
    return(
        <StyledFuel>
            <p>{name}</p>
            {data.map((item)=>(<span>{item}</span>))}
        </StyledFuel>

    )
}