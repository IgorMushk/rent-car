import styled from "styled-components";
import ImageHome from "../../images/bg_home.webp";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-image: url(${ImageHome});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const TextTop = styled.p`
  font-size: 32px;
  color: var(--primeryWhite);
  text-shadow: var(--textShadow);
  margin-top: 160px;
  margin-left: auto;
  margin-right: auto;
`;

export const TextBot = styled.p`
  font-size: 32px;
  color: var(--primeryWhite);
  text-shadow: var(--textShadow);
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-size: 52px;
  letter-spacing: 0.09em;
  font-style: normal;
  font-weight: 600;
  color: var(--primeryWhite);
  text-shadow: var(--textShadow);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  width: 140px;
  height: 2px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--lightBlue);
  color: var(--primeryWhite);
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 180px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: var(--boxShadow);
  &:hover,
  &:focus {
    background-color: var(--darkBlue);
  }
`;
