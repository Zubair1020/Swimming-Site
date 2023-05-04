import styled from "styled-components";

export const HeaderCont = styled.header`
  background-image: url(${({ heroBgi }) => heroBgi});
  background-size: cover;
  background-repeat: no-repeat;
  padding: clamp(1.5rem, 4vw + 1rem, 3.5rem) clamp(2rem, 4vw + 1rem, 5rem);
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
