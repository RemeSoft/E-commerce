import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";
import { deleteCategory } from "../../../../features/admin/category/category-thunks";
import { useDispatch } from "react-redux";

function DeleteCategoryModal() {
  const dispatch = useDispatch();
  const { modalData } = useModalContext();
  const { modalCloseHandler } = useModalContext();

  // category delete handler
  const deleteHandler = (id) => {
    dispatch(deleteCategory(id));
    modalCloseHandler();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-96 rounded-md border border-custom-border-light bg-white p-4"
    >
      <h3 className="font-semibold">DO you want to delete the category?</h3>
      <button
        onClick={() => deleteHandler(modalData)}
        className="mb-2 w-full rounded-md bg-slate-800 py-2.5 text-sm font-semibold text-custom-text-highlight-light"
      >
        Create Now
      </button>
    </div>
  );
}

export default DeleteCategoryModal;
