import { StyledBrand } from "./style"


interface BrandProps {
    name: string;
    data: string[];
  }
export const Brand: React.FC<BrandProps> = ({name, data})=> {
    return(
        <StyledBrand>
            <p>{name}</p>
            {data.map((item)=>(<span>{item}</span>))}
        </StyledBrand>

    )
}