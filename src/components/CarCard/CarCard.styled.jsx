import { styled } from "styled-components";

export const WrapperCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrap = styled.div`
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const HeartIconBtn = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: transform var(--animation-time) var(--animation-cubic);
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const TextItem = styled.span`
  &:not(:last-child)::after {
    content: "";
    vertical-align: middle;
    display: inline-block;
    width: 1px;
    height: 16px;
    margin: 0 6px;
    background-color: var(--colorBackgaundAddTextCarCart);
  }
`;

export const TextBlock = styled.p`
  color: var(--colorAddTextCarCart);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  margin-top: 28px;
  font-size: 14px;
  line-height: 143%;
  background: var(--lightBlue);
  color: var(--primeryWhite);
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  transition: background-color var(--animation-time) var(--animation-cubic);
  &:hover,
  &:focus {
    background: var(--darkBlue);
  }
`;

export const TitleWrap = styled.div`
  width: 274px;
  align-items: center;
  color: var(--primeryBlack);
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  color: var(--primeryBlack);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Text = styled.p`
  color: var(--primeryBlack);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
`;

export const Span = styled.span`
  color: var(--lightBlue);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;