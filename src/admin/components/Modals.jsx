import React from "react";
import { useModalContext } from "../../contexts/ModalContext";
import CreateTypeModal from "../pages/category/modals/CreateTypeModal";
import CreateCategoryModal from "../pages/category/modals/CreateCategoryModal";
import DeleteCategoryModal from "../pages/category/modals/DeleteCategoryModal";

function Modals({ openModal }) {
  // modal close handler
  const { modalCloseHandler } = useModalContext();

  // modal lists
  const modalComponents = {
    "create-type": CreateTypeModal,
    "create-category": CreateCategoryModal,
    "delete-category": DeleteCategoryModal,
  };

  // modal to show
  const ModalToShow = modalComponents[openModal];

  return !openModal ? null : (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm">
      <div
        onClick={modalCloseHandler}
        className="flex h-screen w-screen items-center justify-center"
      >
        {ModalToShow && <ModalToShow openModal={openModal} />}
      </div>
    </div>
  );
}

export default Modals;
