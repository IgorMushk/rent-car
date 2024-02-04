import { useEffect } from "react";
import { ModalDropdown } from "./Dropdown.styled";

export const Dropdown = ({ close, children }) => {
  useEffect(() => {
    const closeDropdownEsc = ({ code }) => {
      if (code === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", closeDropdownEsc);
    return () => {
      document.removeEventListener("keydown", closeDropdownEsc);
    };
  }, [close]);

  return <ModalDropdown>{children}</ModalDropdown>;
};
