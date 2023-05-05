import styled from "styled-components";

export const SpotlightCont = styled.div`
  background-image: url(${({ bgi }) => bgi});
  background-color: #b2fcff;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection && "row-reverse"};
  gap: clamp(1.5rem, 10vw - 1rem, 6rem);
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 8vw, 8rem) 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImgCont = styled.div`
  position: relative;
`;

export const TextCont = styled.div`
  h2 {
    font-size: clamp(1.6rem, 7vw, 3.313rem);
    color: #4d80e4;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  article {
    max-width: 33.75rem;
    margin-bottom: 0.8rem;

    &:last-child {
      margin-bottom: auto;
    }
  }
`;

export const FloatImg = styled.img`
  display: none;
  position: absolute;
  top: 5rem;
  ${({ flexDirection }) =>
    !flexDirection ? "left: -1.5rem;" : "right: -1.5rem;"}
  width: 100%;
  max-width: 8rem;

  @media (min-width: 1240px) {
    display: block;
  }
`;

export const MainImg = styled.img`
  border-radius: 100%;
  width: 100%;
  max-width: clamp(15rem, 35vw, 29.125rem);
`;
