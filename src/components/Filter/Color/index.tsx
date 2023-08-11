import { StyledColor } from "./style"


interface ColorProps {
    name: string;
    data: string[];
  }
export const Color: React.FC<ColorProps> = ({name, data})=> {
    return(
        <StyledColor>
            <p>{name}</p>
            {data.map((item)=>(<span>{item}</span>))}
        </StyledColor>

    )
}