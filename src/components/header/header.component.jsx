import HeroBg from "../../assets/header-images/heroBg.svg";
import Button from "../button/button.component";
import { HeaderCont, HeroTitleCont } from "./header.style";

const Header = () => {
  return (
    <>
      <HeaderCont
        heroBgi={HeroBg}
        loading="lazy"
      >
        <HeroTitleCont>
          <h1>Open New Class, Register Now!</h1>
          <Button>lorem ipsum</Button>
        </HeroTitleCont>
      </HeaderCont>
    </>
  );
};

export default Header;
