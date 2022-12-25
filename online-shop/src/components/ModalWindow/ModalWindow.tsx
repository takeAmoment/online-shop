import { useActions } from "hooks/actions";
import React, { FC } from "react";
import { ModalWindowProps } from "types/types";
import "./ModalWindow.css";

const ModalWindow: FC<ModalWindowProps> = ({ children, isActive }) => {
  const { closeProduct } = useActions();
  const closeWindow = () => {
    closeProduct();
  };
  return (
    <div className={isActive ? "modal active" : "modal"} onClick={closeWindow}>
      <div className="modal__contant" onClick={(e) => e.stopPropagation()}>
        {children}
        <span className="close__icon" onClick={closeWindow}></span>
      </div>
    </div>
  );
};

export default ModalWindow;
