import styled from "styled-components";

export const NewsLatterCont = styled.section`
  position: relative;
  z-index: -1;
  background-image: url(${({ bgi }) => bgi});
  background-size: cover;
  background-repeat: no-repeat;
  padding: clamp(2rem, 13vw - 2rem, 11rem) 1.5rem;
`;

export const NewsLatterTextCont = styled.div`
  margin-bottom: clamp(2rem, 7vw + 1rem, 8rem);
  text-align: center;

  h2 {
    color: #4d80e4;
    font-size: clamp(1.5rem, 4vw, 3.313rem);
    margin-bottom: clamp(1rem, 5vw, 2rem);
  }
  p {
    font-size: clamp(0.5rem, 5vw - 0.2rem, 1.563rem);
    max-width: 48.5rem;
    margin: auto;
  }
`;

export const NewsLatterFrom = styled.form`
  display: flex;
  padding: 0 2rem;

  input {
    background-color: #fff;
    border-radius: 32px 0 0 32px;
    font-size: clamp(14px, 2vw, 25px);
    padding-left: 1.5rem;
    margin-left: auto;
    width: 100%;
    max-width: clamp(10px, 55vw, 660px);

    &::placeholder {
      opacity: 0.502;
    }
  }

  button {
    position: relative;
    background-color: #4d80e4;
    border-radius: 32px;
    color: #fff;
    font-weight: 700;
    padding: clamp(0.5rem, 2vw, 1.5rem) clamp(0.5rem, 4vw, 2rem);
    right: 2rem;
    margin-right: auto;
    text-transform: uppercase;
  }
`;
