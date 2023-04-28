import { useState } from "react";
import {
  HeaderCont,
  NavLinksCont,
  NavLogo,
  MenuButton,
  NavigationCont,
  HeroTitleCont,
} from "./navigation.style";
import NavigationLink from "./nav-link/nav-link.component";
import Logo from "../../assets/logo.svg";
import BurgerMenu from "../../assets/burger-menu.svg";
import Cross from "../../assets/cross.svg";
import HeroBg from "../../assets/heroBg.svg";
import Button from "../button/button.component";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeaderCont heroBgi={HeroBg}>
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
        <HeroTitleCont>
          <h1>Open New Class, Register Now!</h1>
          <Button>lorem ipsum</Button>
        </HeroTitleCont>
      </HeaderCont>
    </>
  );
};

export default Navigation;
