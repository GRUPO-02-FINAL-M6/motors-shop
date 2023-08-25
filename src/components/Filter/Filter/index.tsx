import { StyledBrand } from "./style"


interface FilterProps {
    name: string;
    data: string[] | number[];
    set: any;
}
export const FilterTopics: React.FC<FilterProps> = ({ name, data, set }) => {
    return (
        <StyledBrand>
            <p>{name}</p>
            {
                data.map((item) => {
                    return <span onClick={() => {set(item)}}>{item}</span>
                })
            }
        </StyledBrand>
    )
}