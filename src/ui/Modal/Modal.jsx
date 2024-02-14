import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./Modal.scss";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const closeModal = () => setOpenName("");
  const openModal = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: opensWindowName }) => {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(opensWindowName) });
};

const Window = ({ children, name }) => {
  const { openName, closeModal } = useContext(ModalContext);

  const ref = useClickOutside(closeModal);

  if (name !== openName) return null;

  return createPortal(
    <div className="overlay">
      <div className="modal" ref={ref}>
        <button onClick={closeModal} className="modal__btn">
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: closeModal })}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
