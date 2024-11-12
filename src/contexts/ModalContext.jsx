import { createContext, useState, useContext } from "react";
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  // initial states
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  // some handler methods
  const modalOpenHandler = (modalId, data = null) => {
    setOpenModal(modalId);
    setModalData(data);
  };

  const modalCloseHandler = () => {
    setOpenModal(false);
    setModalData(null);
  };

  // values objects
  const values = {
    openModal,
    setOpenModal,
    modalOpenHandler,
    modalCloseHandler,
    modalData,
  };

  return (
    // prettier-ignore
    <ModalContext.Provider value={values}>
      {children}
    </ModalContext.Provider>
  );
};

// hooks for use
export const useModalContext = () => {
  return useContext(ModalContext);
};
