import { NavLink } from "react-router-dom";
import NavigationStayled from "./NavigationStayled";

const Navigation = () => {
  return (
    <NavigationStayled>
      <NavLink
        exact
        to="/"
        className="navigetionLink"
        activeClassName="activeNavLink"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className="navigetionLink"
        activeClassName="activeNavLink"
      >
        Movies
      </NavLink>
    </NavigationStayled>
  );
};

export default Navigation;

// className = {}
// activeClassName ={activeLink}
