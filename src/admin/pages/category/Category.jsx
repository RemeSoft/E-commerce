import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../features/admin/category/category-thunks";
import { API_URL } from "../../../features/api";
import { useModalContext } from "../../../contexts/ModalContext";
import Modals from "../../components/Modals";

export default function Category() {
  const dispatch = useDispatch();

  // getting states
  const { openModal, modalOpenHandler } = useModalContext();
  const { categories } = useSelector((state) => state.admin.category);

  // loading product types
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="flex-grow overflow-y-scroll lg:mx-2">
      {/* Breadcrumb */}
      <ol className="mt-2 flex items-center whitespace-nowrap">
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="#"
          >
            Home
          </a>
          <svg
            className="mx-2 size-4 flex-shrink-0 overflow-visible text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="#"
          >
            App Center
            <svg
              className="mx-2 size-4 flex-shrink-0 overflow-visible text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </li>
        <li
          className="inline-flex items-center truncate text-sm font-semibold text-gray-800 dark:text-neutral-200"
          aria-current="page"
        >
          Application
        </li>
      </ol>

      {/* category table */}
      <section className="mt-2">
        <div className="overflow-x-auto">
          <table className="min-w-full whitespace-nowrap border border-custom-border-light bg-white">
            <thead>
              <tr>
                <th className="border-b border-custom-border-light bg-custom-tertiary-light px-6 py-2 text-left text-xs font-semibold uppercase text-gray-700">
                  No.
                </th>
                <th className="border-b border-custom-border-light bg-custom-tertiary-light px-6 py-2 text-left text-xs font-semibold uppercase text-gray-700">
                  Image
                </th>
                <th className="border-b border-custom-border-light bg-custom-tertiary-light px-6 py-2 text-left text-xs font-semibold uppercase text-gray-700">
                  Name
                </th>
                <th className="border-b border-custom-border-light bg-custom-tertiary-light px-6 py-2 text-left text-center text-xs font-semibold uppercase text-gray-700">
                  products
                </th>
                <th className="border-b border-custom-border-light bg-custom-tertiary-light px-6 py-2 text-left text-xs font-semibold uppercase text-gray-700">
                  Popularity
                </th>
                <th className="border-b border-custom-border-light bg-custom-tertiary-light px-6 py-2 text-left text-center text-xs font-semibold uppercase text-gray-700">
                  Actions
                </th>
                <th className="border-b border-custom-border-light bg-custom-tertiary-light px-6 py-2 text-left text-xs font-semibold uppercase text-gray-700">
                  <div className="group relative inline-block text-left">
                    <button className="focus:outline-none">
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        color="#000000"
                        fill="none"
                      >
                        <path
                          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V16M16 12H8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="absolute right-0 hidden w-44 origin-top-right rounded-md bg-white shadow-lg group-hover:block">
                      <div className="py-1">
                        <button
                          onClick={() => modalOpenHandler("create-category")}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Create category
                        </button>
                        <button
                          onClick={() => modalOpenHandler("create-type")}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Create product type
                        </button>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border-b border-gray-300 px-6 py-1.5 text-sm text-gray-700">
                    {++index}
                  </td>
                  <td className="border-b border-gray-300 px-6 py-1.5 text-sm text-gray-700">
                    {/* <img
                      className="h-8 rounded-md"
                      src="/assets/images/products/product-1.jpg"
                      alt="Product Image"
                    /> */}
                    <img
                      className="h-8 w-8 rounded-md object-cover"
                      src={API_URL + `/uploads/category/${item.Image.name}`}
                      alt="Product Image"
                    />
                  </td>
                  <td className="border-b border-gray-300 px-6 py-1.5 text-sm text-gray-700">
                    {item.name}
                  </td>
                  <td className="border-b border-gray-300 px-6 py-1.5 text-center text-sm text-gray-700">
                    Man
                  </td>
                  <td className="border-b border-gray-300 px-6 py-1.5 text-sm text-gray-700">
                    <small>
                      <span className="rounded-md bg-custom-state-success-background px-2 py-0.5 text-custom-state-success-foreground">
                        12.95%
                      </span>
                      &nbsp; vs this month.
                    </small>
                  </td>
                  <td className="border-b border-gray-300 px-6 py-1.5 text-center text-sm text-gray-700">
                    <button className="p-2">
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        color="#000000"
                        fill="none"
                      >
                        <path
                          d="M16.4249 4.60509L17.4149 3.6151C18.2351 2.79497 19.5648 2.79497 20.3849 3.6151C21.205 4.43524 21.205 5.76493 20.3849 6.58507L19.3949 7.57506M16.4249 4.60509L9.76558 11.2644C9.25807 11.772 8.89804 12.4078 8.72397 13.1041L8 16L10.8959 15.276C11.5922 15.102 12.228 14.7419 12.7356 14.2344L19.3949 7.57506M16.4249 4.60509L19.3949 7.57506"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.9999 13.5C18.9999 16.7875 18.9999 18.4312 18.092 19.5376C17.9258 19.7401 17.7401 19.9258 17.5375 20.092C16.4312 21 14.7874 21 11.4999 21H11C7.22876 21 5.34316 21 4.17159 19.8284C3.00003 18.6569 3 16.7712 3 13V12.5C3 9.21252 3 7.56879 3.90794 6.46244C4.07417 6.2599 4.2599 6.07417 4.46244 5.90794C5.56879 5 7.21252 5 10.5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        modalOpenHandler("delete-category", item.id)
                      }
                    >
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        color="#000000"
                        fill="none"
                      >
                        <path
                          d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.5 16.5L9.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M14.5 16.5L14.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="border-b border-gray-300 px-6 py-1.5 text-sm text-gray-700">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.9959 18H12.0049"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.9998 18H18.0088"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.99981 18H6.00879"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9959 12H12.0049"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9998 6H12.0088"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.9998 12H18.0088"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.9998 6H18.0088"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.99981 12H6.00879"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.99981 6H6.00879"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Modals openModal={openModal} />
    </div>
  );
}
