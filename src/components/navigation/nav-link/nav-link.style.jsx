import styled from "styled-components";

export const NavLi = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  text-indent: 0;
`;

export const NavLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  transition: color 0.4s ease;

  &:hover {
    color: #00e0ff;
    cursor: pointer;
  }
`;
