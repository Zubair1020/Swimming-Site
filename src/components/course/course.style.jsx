import styled from "styled-components";

export const CourseCont = styled.section`
  background-color: #4d80e4;
  color: #ffffff;
  text-align: center;
  padding: clamp(2rem, 10vw, 5rem) clamp(1rem, 2vw, 2rem);
`;

export const CourseTextCont = styled.div`
  padding-bottom: clamp(1.5rem, 5vw, 5rem);
  h1 {
    font-size: clamp(2rem, 9vw, 4.375rem);
    font-weight: 700;
    margin-bottom: clamp(0.8rem, 3vw, 1.5rem);
  }
  p {
    font-size: clamp(1.07rem, 4vw - 0.5rem, 1.563rem);
    text-align: center;
    margin: auto;
    max-width: 48.875rem;
  }
`;

export const CardGroupCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardImg = styled.img`
  width: 100%;
  max-width: 12.313rem;
  border-radius: 100%;
  margin: auto;
`;

export const CardTextCont = styled.div`
  h2 {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 14px;
    width: max(350px);
    height: max(90px);
  }
`;
