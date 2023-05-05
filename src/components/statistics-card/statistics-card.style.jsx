import styled from "styled-components";

export const StatisticsCardCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  h4 {
    color: #ffffff;
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 700;
    text-transform: uppercase;
  }
`;
export const StatisticsCardTitleCont = styled.div`
  background-color: #b2fcff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(5rem, 15vw, 15.563rem);
  aspect-ratio: 1;

  h2 {
    color: #4d80e4;
    font-size: clamp(2rem, 7vw, 6rem);
    text-align: center;
  }
`;
