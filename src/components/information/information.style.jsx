import styled from "styled-components";

export const InformationCont = styled.section`
  background-image: url(${({ bgi }) => bgi});
  background-repeat: no-repeat;
  background-size: cover;
  padding: clamp(2rem, 20vw - 2rem, 17rem) clamp(1rem, 4vw, 2.5rem);
  text-align: center;

  h2 {
    color: #ffffff;
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    margin: auto;
    max-width: 55rem;
    margin-bottom: clamp(1rem, 5vw, 5rem);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
