import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 8px 16px;
`;

export const Link = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 14px;
  background: var(--lightBlue);
  color: var(--primeryWhite);
  font-weight: 600;
  line-height: 1.43;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  cursor: pointer;
  transition: background-color var(--animation-time) var(--animation-cubic);
  &:hover,
  &:focus {
    background: var(--darkBlue)
  };
   &.active {
    background: var(--darkBlue)
  }; 
`;
