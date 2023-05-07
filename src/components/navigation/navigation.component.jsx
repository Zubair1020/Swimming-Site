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
import { useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      window.scrollY >= 120 ? setIsScrolling(true) : setIsScrolling(false);
    };
    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <NavigationCont isScrolling={isScrolling}>
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
          <NavigationLink href="about">Home</NavigationLink>
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
