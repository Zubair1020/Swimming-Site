import { NavLi, NavLink } from "./nav-link.style";

const NavigationLink = ({ children }) => (
  <NavLi>
    <NavLink>{children}</NavLink>
  </NavLi>
);

export default NavigationLink;
