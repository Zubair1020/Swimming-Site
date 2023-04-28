import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 25px;
  background-color: #4d80e4;
  color: #ffffff;
  font-size: clamp(1rem, 4vw, 1.5rem);
  font-weight: 600;
  padding: 0.8rem 2rem;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
