import styled from "styled-components";

export const FooterCont = styled.footer`
  background-color: #000033;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  padding: clamp(2rem, 20vw, 10rem) 2rem;
  line-height: 1.6;

  h2 {
    color: #ffffffff;
    margin-bottom: 0.7rem;
  }
  p {
    width: 100%;
    max-width: 22.5rem;
    font-size: 1.1rem;
  }
  li {
    color: #ffffffff;
    list-style: none;
  }
`;

export const AboutCont = styled.div``;

export const HeadingTowCont = styled.div`
  li {
    list-style-type: disc;
  }
`;

export const HeadingThereCont = styled.div`
  li {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    a {
      color: #ffffff;
      &:hover {
        color: cyan;
      }
    }
  }
`;
