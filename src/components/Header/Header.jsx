import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <Navigation />
      </div>
    </HeaderStyled>
  );
};

export default Header;
