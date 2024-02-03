import { styled } from "styled-components";
import { ReactComponent as Arrow } from "../../icons/arrow.svg";

export const Form = styled.form`
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
`;

export const Label = styled.span`
  text-align: left;
  display: block;
  margin-left: 2px;
  margin-bottom: 8px;
  color: var(--colorLabel);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const Selector = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
  width: ${({ width }) => width};
  height: 48px;
  border: none;
  border-radius: 14px;
  background: var(--colorBackgroundSelector);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const FromToContainer = styled.div`
  display: flex;
`;

export const FormItemWrapper = styled.div`
  position: relative;
`;

export const FromTo = styled.div`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11%;
`;

export const CustomArrow = styled(Arrow)`
  position: absolute;
  top: 50%;
  right: 18px;
  pointer-events: none;
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "360deg")}) translateY(-50%);
  transform-origin: top;
`;

export const SelectorWrapper = styled.div`
  position: relative;
`;

export const SelectorItem = styled.li`
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? "--var(primeryBlack)" : "--colorNotActivSelector")};
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover,
  &:focus {
    color: var(--primeryBlack);
  }
`;

export const InputWrapper = styled.input`
  padding-left: 75px;
  width: 80px;
  height: 48px;
  border: none;
  border-radius: ${({ $side }) => {
    if ($side === "left") { return "14px 0 0 14px";}
    return "0 14px 14px 0";
  }};
  border-right: ${({ $side }) => {
    if ($side === "left") { return "var(--colorBorderInput)";
    }
  }};
  background: var(--colorBackgroundSelector);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
  font-size: 12px;
  color: red;
`;

export const Btn = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  width: 136px;
  border: none;
  border-radius: 12px;
  margin-top: 28px;
  background: ${({ disabled }) => (disabled ? "grey" : "var(--lightBlue)")};
  color: var(--primeryWhite);
  font-weight: 600;
  line-height: 1.43;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color var(--animation-time) var(--animation-cubic);
  &:hover,
  &:focus {
    background: ${({ disabled }) => (disabled ? null : "var(--darkBlue)")};
  }
`;

