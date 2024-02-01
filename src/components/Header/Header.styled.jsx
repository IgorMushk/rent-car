import styled from "styled-components";

export const StyleHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--backgroundColorHeader);
  color: var(--primeryWhite);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);
`;