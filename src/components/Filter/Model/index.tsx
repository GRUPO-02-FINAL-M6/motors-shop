import { StyledModel } from "./style"


interface ModelProps {
    name: string;
    data: string[];
  }
export const Model: React.FC<ModelProps> = ({name, data})=> {
    return(
        <StyledModel>
            <p>{name}</p>
            {data.map((item)=>(<span>{item}</span>))}
        </StyledModel>

    )
}