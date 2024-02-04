import styled from "styled-components";

export const ModalDropdown = styled.div`
  position: absolute;
  z-index: 100;
  padding: 14px 8px 4px 18px;
  top: calc(100% + 4px);
  left: 0;
  width: 80%;
  max-height: 272px;
  overflow-y: auto;
  border: var(--colorBorderDropdown);
  border-radius: 14px;
  background-color: var(--primeryWhite);
  box-shadow: var(--colorShadowBorderDropdown);
  color: var(--colorDropdown);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  text-align: left;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--colorBackScroollDropdown);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
