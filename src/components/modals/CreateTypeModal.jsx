import React from "react";
import { useForm } from "react-hook-form";
import { createType } from "../../features/type/type-thunks";
import { useModalContext } from "../../contexts/ModalContext";
import { useDispatch } from "react-redux";

export default function CreateTypeModal() {
  const dispatch = useDispatch();
  const { modalCloseHandler } = useModalContext();

  // prettier-ignore
  const {  formState: { errors } } = useForm();
  const { register, handleSubmit, reset } = useForm();

  // handle submit
  const onSubmit = (data) => {
    dispatch(createType(data));
    modalCloseHandler();
    reset();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-96 rounded-md border border-custom-border-light bg-white p-4"
    >
      <h3 className="font-semibold">Create new type</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter type name"
          className="mb-3 mt-2 w-full rounded-md border border-custom-border-light bg-custom-tertiary-light px-4 py-2 focus:outline-slate-400"
          {...register("name", {
            required: "Product type is required.",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters long.",
            },
          })}
        />
        {errors.type && (
          <p className="mx-1 my-1 text-xs text-red-600">
            {errors.type.message}
          </p>
        )}
        <button className="mb-2 w-full rounded-md bg-slate-800 py-2.5 text-sm font-semibold text-custom-text-highlight-light">
          Create Now
        </button>
      </form>
    </div>
  );
}
