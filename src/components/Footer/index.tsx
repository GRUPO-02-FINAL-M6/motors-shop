import logo from "../../assets/logoWhite.svg";
import direitos from "../../assets/direitos.svg";

import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";

export const Footer = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="flexGrid">
          <img src={logo} className="logo" />
          <img src={direitos} className="logo" />
          <a href="#">
            <img src="../../src/assets/Up.svg" alt="" />
          </a>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
