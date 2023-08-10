import { useState } from "react";
import logo from "../../assets/logo.svg";
import { StyledContainer } from "../../styles/grid";
import { HamburgerIcon, StyledHeader } from "./style";
import { LoginButtons } from "../Button";


export const Header = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    
  return (
    <StyledHeader menuOpen={menuOpen}>
      <StyledContainer>
        <div className="flexGrid">
          <img src={logo} className="logo" />
          <nav>
            <div className="buttons">
              <LoginButtons menuOpen={menuOpen} />
              <HamburgerIcon onClick={toggleMenu}>
                {menuOpen ? <h2>X</h2> : <h2>☰</h2>}
              </HamburgerIcon>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
