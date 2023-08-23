import { StyledLink } from "./style"



export const Link = ({go, children}: {ref: string, children: React.ReactNode}) => {
  return (
    <StyledLink to={go}>
      {children}
    </StyledLink>   
  )
}