import styled from "styled-components";

export const NavLogo = styled.img`
  max-width: clamp(5rem, 10vw, 8rem);
`;
export const HeaderCont = styled.header`
  background-image: url(${({ heroBgi }) => heroBgi});
  background-size: cover;
  background-repeat: no-repeat;
  padding: clamp(1.5rem, 4vw + 1rem, 3.5rem) clamp(2rem, 4vw + 1rem, 5rem);
`;

export const NavigationCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuButton = styled.button`
  position: absolute;
  inset: 2rem clamp(1.5rem, 6vw, 5rem) auto auto;
  z-index: 9999;
  background-image: url(${({ bgi }) => bgi});
  background-size: 100%;
  background-color: transparent;
  display: none;
  width: 2rem;
  aspect-ratio: 1;

  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

export const NavLinksCont = styled.ul`
  display: flex;
  font-size: clamp(1rem, 5vw - 1.1rem, 1.438rem);
  gap: clamp(1rem, 5vw, 2rem);

  @media screen and (max-width: 1100px) {
    position: absolute;
    inset: 2rem clamp(1.5rem, 6vw, 5rem) auto auto;
    z-index: 1000;
    background: #000;
    border-radius: 5px;
    flex-direction: column;
    padding: 3rem clamp(2rem, 10vw + 1rem, 5rem);
    transition: transform 0.3s ease-in-out;
    transform-origin: top right;
    transform: scale(${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")});

    @supports (backdrop-filter: blur(0.5rem)) {
      background-color: hsl(220 73% 50% / 0.3);
      backdrop-filter: blur(0.5rem);
    }
  }
`;

export const HeroTitleCont = styled.div`
  padding: clamp(4rem, 10vw, 8rem) 0;

  h1 {
    color: #4d80e4;
    font-size: clamp(2rem, 9vw, 4.375rem);
    max-width: 40rem;
    margin-bottom: 2rem;
  }
`;
