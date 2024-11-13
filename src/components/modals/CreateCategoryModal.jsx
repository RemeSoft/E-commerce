import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../features/category/category-thunks";
import { loadTypes } from "../../features/type/type-thunks";
import { useModalContext } from "../../contexts/ModalContext";

export default function CreateCategoryModal() {
  const dispatch = useDispatch();

  // states
  const [imagePreview, setImagePreview] = useState(null);
  const { types, status, error } = useSelector((state) => state.admin.type);
  const { modalCloseHandler } = useModalContext();

  // prettier-ignore
  const {  formState: { errors } } = useForm();
  const { register, handleSubmit, reset } = useForm();

  // methods
  const onSubmit = (data) => {
    dispatch(createCategory(data));
    setImagePreview(null);
    modalCloseHandler();
    reset();
  };

  // load types
  useEffect(() => {
    dispatch(loadTypes());
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-80 rounded-md border border-custom-border-light bg-white p-4"
    >
      <h3 className="font-semibold">Create new category</h3>
      <label
        htmlFor="upload"
        className="mt-2 flex h-48 items-center justify-center rounded-md border border-dashed border-custom-border-light bg-custom-secondary-light"
      >
        {imagePreview ? (
          <img
            className="h-full w-full object-cover"
            src={imagePreview}
            alt="Preview"
          />
        ) : (
          <span className="text-custom-text-secondary-light">Upload Image</span>
        )}
      </label>

      {/* Hidden file input */}
      <input
        hidden
        id="upload"
        type="file"
        accept="image/*"
        {...register("image", {
          required: "Image is required!",
          onChange: (event) => {
            const file = event.target.files[0];
            if (file) {
              setImagePreview(URL.createObjectURL(file));
            }
          },
        })}
      />
      {errors.image && <p style={{ color: "red" }}>{errors.image.message}</p>}

      {/* Text input for category name */}
      <input
        type="text"
        placeholder="Enter category name"
        className="mt-2 w-full rounded-md border border-custom-border-light bg-custom-tertiary-light px-4 py-2 focus:outline-slate-400"
        {...register("name", {
          required: "Name is required!",
        })}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      {/* Dropdown for product types */}
      <select
        className="mt-2 w-full rounded-lg border border-custom-border-light bg-custom-tertiary-light px-3 py-2 text-sm text-gray-700 shadow-sm transition-all focus:outline-slate-400"
        {...register("type", {
          required: "Product Type is required!",
        })}
      >
        <option value="">Select Type</option>
        {types.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {errors.type && <p style={{ color: "red" }}>{errors.type.message}</p>}

      {/* Submit button */}
      <button
        onClick={handleSubmit(onSubmit)}
        className="mt-2 w-full rounded-md bg-slate-800 py-2.5 text-sm font-semibold text-custom-text-highlight-light"
      >
        Create Now
      </button>
    </div>
  );
}
