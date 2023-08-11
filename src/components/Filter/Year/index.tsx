import { StyledYear } from "./style"


interface YearProps {
    name: string;
    data: string[];
  }
export const Year: React.FC<YearProps> = ({name, data})=> {
    return(
        <StyledYear>
            <p>{name}</p>
            {data.map((item)=>(<span>{item}</span>))}
        </StyledYear>

    )
}