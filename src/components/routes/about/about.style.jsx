import styled from "styled-components";

export const AboutSec = styled.section`
  display: flex;
  align-items: center;
  @media (min-width: 570px) {
    height: 100vh;
  }
`;

export const AboutContentCont = styled.div`
  padding: clamp(2rem, 15vw, 5rem) clamp(2rem, 10vw, 8rem);
  margin: 5rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  h1 {
    font-size: clamp(1.6rem, 7vw, 3.313rem);
    color: #4d80e4;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: clamp(0.8rem, 8vw, 1.2rem);
  }
`;
