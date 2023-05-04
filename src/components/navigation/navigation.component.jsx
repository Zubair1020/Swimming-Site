import { useState } from "react";
import {
  NavLinksCont,
  NavLogo,
  MenuButton,
  NavigationCont,
} from "./navigation.style";

import NavigationLink from "../nav-link/nav-link.component";
import Logo from "../../assets/header-images/logo.svg";
import BurgerMenu from "../../assets/header-images/burger-menu.svg";
import Cross from "../../assets/header-images/cross.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <NavigationCont>
        <NavLogo
          src={Logo}
          alt="Logo"
        />
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="primary-navigation"
          aria-expanded="false"
          bgi={!isMenuOpen ? BurgerMenu : Cross}
        />
        <NavLinksCont
          id="primary-navigation"
          isMenuOpen={isMenuOpen}
        >
          <NavigationLink>Home</NavigationLink>
          <NavigationLink>About</NavigationLink>
          <NavigationLink>Services</NavigationLink>
          <NavigationLink>Products</NavigationLink>
          <NavigationLink>Contact</NavigationLink>
        </NavLinksCont>
      </NavigationCont>
    </>
  );
};

export default Navigation;
