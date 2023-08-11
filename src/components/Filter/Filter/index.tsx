import { StyledBrand } from "./style"


interface FilterProps {
    name: string;
    data: string[];
}
export const FilterTopics: React.FC<FilterProps> = ({ name, data }) => {
    return (
        <StyledBrand>
            <p>{name}</p>
            {data.map((item) => (<span>{item}</span>))}
        </StyledBrand>
    )
}