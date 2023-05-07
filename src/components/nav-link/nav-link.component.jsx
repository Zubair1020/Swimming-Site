import { NavLi, NavLink } from "./nav-link.style";

const NavigationLink = ({ href, children }) => (
  <NavLi>
    <NavLink href={href}>{children}</NavLink>
  </NavLi>
);

export default NavigationLink;
