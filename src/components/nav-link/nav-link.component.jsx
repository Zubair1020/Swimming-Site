import { NavLi, StyledNavLink } from "./nav-link.style";

const NavigationLink = ({ to, children }) => (
  <NavLi>
    <StyledNavLink to={to}>{children}</StyledNavLink>
  </NavLi>
);

export default NavigationLink;
