import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLi = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  text-indent: 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  font-weight: 400 !important;
  background-size: 0% 3px;
  transition: color 0.4s ease, background-size 300ms ease;

  &:hover {
    color: #00e0ff;
    cursor: pointer;
  }

  &.active {
    padding-bottom: 1rem;
    color: cyan;
    background-image: linear-gradient(to right, #b2fcff, #19a7ce);
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% 3px;
  }
`;
