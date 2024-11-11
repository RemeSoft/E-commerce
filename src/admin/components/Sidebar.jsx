import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [{ path: "/admin/overview", name: "Overview" }];

  return (
    <aside className="bg-r-custom-primary-light absolute left-[-250px] top-0 z-50 h-screen w-[250px] overflow-y-scroll border-r border-custom-border-light bg-custom-primary-light px-3 lg:left-0">
      {/* RECENT TAB  */}
      <section className="mt-2">
        <h3 className="mb-2 text-custom-text-secondary-light">Recent</h3>
        <div>
          <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
            <ul>
              <li>
                <a
                  className="flex gap-2 rounded-md bg-custom-tertiary-light px-3 py-2"
                  href="#"
                >
                  <span className="opacity-40">●</span> Overview{" "}
                </a>
              </li>
              <li>
                <a
                  className="flex gap-2 rounded-md px-3 py-2 text-custom-text-secondary-light"
                  href="#"
                >
                  <span className="opacity-40">●</span> Projects{" "}
                </a>
              </li>
            </ul>
          </div>
          <div
            id="segment-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="segment-item-2"
          >
            <ul className="mt-2">
              <li>
                <a
                  className="flex gap-2 rounded-md bg-custom-tertiary-light px-3 py-2"
                  href="#"
                >
                  <span className="opacity-40">●</span> eCommerce{" "}
                </a>
              </li>
              <li>
                <a
                  className="flex gap-2 rounded-md px-3 py-2 text-custom-text-secondary-light"
                  href="#"
                >
                  <span className="opacity-40">●</span> Online Course{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* NAVIGATION  */}
      <section className="mt-2">
        <h3 className="mb-2 text-custom-text-secondary-light">Dashboard</h3>
        <nav>
          <NavLink
            className={({ isActive }) =>
              `flex list-none items-center gap-2 rounded-md py-2 pl-2 ${
                isActive ? "sidebar-active-link" : ""
              }`
            }
            to="/admin"
            end
          >
            <svg
              className="icon-sm invisible"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 18V16M12 18V15M17 18V13M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.99219 11.4863C8.14729 11.5581 13.0341 11.2328 15.8137 6.82132M13.9923 6.28835L15.8678 5.98649C16.0964 5.95738 16.432 6.13785 16.5145 6.35298L17.0104 7.99142"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Overview
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex list-none items-center gap-2 rounded-md py-2 pl-2 ${
                isActive ? "sidebar-active-link" : ""
              }`
            }
            to="/admin/category"
            end
          >
            <svg
              className="icon-sm invisible"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.5704 21H10.507C6.49678 21 4.49165 21 3.24583 19.4542C2 17.9083 2 15.4204 2 10.4444V7.21895C2 5.30157 2 4.34287 2.32354 3.62351C2.55416 3.11072 2.89517 2.68761 3.30843 2.40145C3.88819 2 4.66083 2 6.20611 2C7.19611 2 7.69111 2 8.12443 2.20162C9.11377 2.66196 9.52173 3.77711 9.96816 4.88497L10.507 6.22222M7.00413 6.22222H15.5487C17.3409 6.22222 18.2369 6.22222 18.8806 6.7559C19.1593 6.98694 19.3986 7.28381 19.5848 7.62958C19.8747 8.16804 19.9692 8.84883 20 9.91667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4.5956 12.5755C5.02693 11.4264 5.24259 10.8518 5.66347 10.491C6.34287 9.90853 7.31965 10.0062 8.15669 10.0062H17.2524C19.7292 10.0062 20.9676 10.0062 21.5856 10.8031C22.6464 12.1711 21.3949 14.3902 20.8908 15.7332C19.9871 18.141 19.5352 19.3449 18.6352 20.0791C17.2638 21.1979 15.269 20.9835 13.6139 20.9835H9.93724C6.3942 20.9835 4.62269 20.9835 3.70143 19.8866C2.00075 17.8617 3.83072 14.6133 4.5956 12.5755Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Manage Category
          </NavLink>
          <details>
            <summary className="flex list-none items-center gap-2 rounded-md py-2 pl-2">
              <svg
                className="icon-sm"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 10.9866V15.4932C3 18.3257 3 19.742 3.87868 20.622C4.75736 21.502 6.17157 21.502 9 21.502H15C17.8284 21.502 19.2426 21.502 20.1213 20.622C21 19.742 21 18.3257 21 15.4932V10.9866"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 17.9741H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17.7957 2.50049L6.14983 2.52954C4.41166 2.44011 3.966 3.77859 3.966 4.4329C3.966 5.01809 3.89055 5.8712 2.82524 7.47462C1.75993 9.07804 1.83998 9.55437 2.44071 10.6644C2.93928 11.5857 4.20741 11.9455 4.86862 12.0061C6.96883 12.0538 7.99065 10.2398 7.99065 8.96495C9.03251 12.1683 11.9955 12.1683 13.3158 11.802C14.6385 11.435 15.7717 10.1214 16.0391 8.96495C16.195 10.4021 16.6682 11.2408 18.0663 11.817C19.5145 12.4139 20.7599 11.5016 21.3848 10.9168C22.0096 10.332 22.4107 9.03364 21.2967 7.60666C20.5285 6.62257 20.2084 5.69548 20.1032 4.73462C20.0423 4.17787 19.9888 3.57961 19.5971 3.1989C19.0247 2.64253 18.2035 2.47372 17.7957 2.50049Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              eCommerce
            </summary>
            <ul>
              <li>
                <a
                  className="flex list-none items-center gap-2 rounded-md bg-custom-tertiary-light px-3 py-2"
                  href="#"
                >
                  <span className="icon-sm" />
                  <span className="icon grid place-content-center opacity-30">
                    ●
                  </span>
                  Overview
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary className="flex list-none items-center gap-2 rounded-md py-2 pl-2">
              <svg
                className="icon-sm"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 15H13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8 22H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9 2.00098C6.37454 2.00933 4.9565 2.08726 3.91891 2.81379C3.48891 3.11488 3.1149 3.48888 2.81382 3.91888C2 5.08113 2 6.72074 2 9.99997C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C21.9127 15.0435 21.9906 13.6254 21.999 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19.5 4.14631L19.563 4.10086C20.6208 3.3371 21.1498 2.95522 21.5749 3.13961C22 3.324 22 3.9353 22 5.15791V5.84209C22 7.0647 22 7.676 21.5749 7.86039C21.1498 8.04478 20.6208 7.6629 19.563 6.89914L19.5 6.85369M15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.5 8.10301 19.5 7.38118 19.5 5.9375V5.0625C19.5 3.61882 19.5 2.89699 18.9874 2.44849C18.4749 2 17.6499 2 16 2H15.5C13.8501 2 13.0251 2 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Online Course
            </summary>
            <ul>
              <li>
                <a
                  className="flex list-none items-center gap-2 rounded-md bg-custom-tertiary-light px-3 py-2"
                  href="#"
                >
                  <span className="icon-sm" />
                  <span className="icon grid place-content-center opacity-30">
                    ●
                  </span>
                  Overview
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary className="flex list-none items-center gap-2 rounded-md py-2 pl-2">
              <svg
                className="icon-sm"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5704 21H10.507C6.49678 21 4.49165 21 3.24583 19.4542C2 17.9083 2 15.4204 2 10.4444V7.21895C2 5.30157 2 4.34287 2.32354 3.62351C2.55416 3.11072 2.89517 2.68761 3.30843 2.40145C3.88819 2 4.66083 2 6.20611 2C7.19611 2 7.69111 2 8.12443 2.20162C9.11377 2.66196 9.52173 3.77711 9.96816 4.88497L10.507 6.22222M7.00413 6.22222H15.5487C17.3409 6.22222 18.2369 6.22222 18.8806 6.7559C19.1593 6.98694 19.3986 7.28381 19.5848 7.62958C19.8747 8.16804 19.9692 8.84883 20 9.91667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4.5956 12.5755C5.02693 11.4264 5.24259 10.8518 5.66347 10.491C6.34287 9.90853 7.31965 10.0062 8.15669 10.0062H17.2524C19.7292 10.0062 20.9676 10.0062 21.5856 10.8031C22.6464 12.1711 21.3949 14.3902 20.8908 15.7332C19.9871 18.141 19.5352 19.3449 18.6352 20.0791C17.2638 21.1979 15.269 20.9835 13.6139 20.9835H9.93724C6.3942 20.9835 4.62269 20.9835 3.70143 19.8866C2.00075 17.8617 3.83072 14.6133 4.5956 12.5755Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Category
            </summary>
            <ul>
              <li>
                <a
                  className="flex list-none items-center gap-2 rounded-md bg-custom-tertiary-light px-3 py-2"
                  href="#"
                >
                  <span className="icon-sm" />
                  <span className="icon grid place-content-center opacity-30">
                    ●
                  </span>
                  Projects
                </a>
              </li>
            </ul>
          </details>
        </nav>
      </section>
      {/* NAVIGATION  */}
      <section className="mt-2">
        <h3 className="mb-2 text-custom-text-secondary-light">Pages</h3>
        <nav>
          <a
            className="flex list-none items-center gap-2 rounded-md bg-custom-tertiary-light py-2 pl-2"
            href="#"
          >
            <svg
              className="icon-sm invisible"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 18V16M12 18V15M17 18V13M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.99219 11.4863C8.14729 11.5581 13.0341 11.2328 15.8137 6.82132M13.9923 6.28835L15.8678 5.98649C16.0964 5.95738 16.432 6.13785 16.5145 6.35298L17.0104 7.99142"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Overview
          </a>
          <details>
            <summary className="flex list-none items-center gap-2 rounded-md py-2 pl-2">
              <svg
                className="icon-sm"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 10.9866V15.4932C3 18.3257 3 19.742 3.87868 20.622C4.75736 21.502 6.17157 21.502 9 21.502H15C17.8284 21.502 19.2426 21.502 20.1213 20.622C21 19.742 21 18.3257 21 15.4932V10.9866"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 17.9741H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17.7957 2.50049L6.14983 2.52954C4.41166 2.44011 3.966 3.77859 3.966 4.4329C3.966 5.01809 3.89055 5.8712 2.82524 7.47462C1.75993 9.07804 1.83998 9.55437 2.44071 10.6644C2.93928 11.5857 4.20741 11.9455 4.86862 12.0061C6.96883 12.0538 7.99065 10.2398 7.99065 8.96495C9.03251 12.1683 11.9955 12.1683 13.3158 11.802C14.6385 11.435 15.7717 10.1214 16.0391 8.96495C16.195 10.4021 16.6682 11.2408 18.0663 11.817C19.5145 12.4139 20.7599 11.5016 21.3848 10.9168C22.0096 10.332 22.4107 9.03364 21.2967 7.60666C20.5285 6.62257 20.2084 5.69548 20.1032 4.73462C20.0423 4.17787 19.9888 3.57961 19.5971 3.1989C19.0247 2.64253 18.2035 2.47372 17.7957 2.50049Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              eCommerce
            </summary>
            <ul>
              <li>
                <a
                  className="flex list-none items-center gap-2 rounded-md bg-custom-tertiary-light px-3 py-2"
                  href="#"
                >
                  <span className="icon-sm" />
                  <span className="icon grid place-content-center opacity-30">
                    ●
                  </span>
                  Overview
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary className="flex list-none items-center gap-2 rounded-md py-2 pl-2">
              <svg
                className="icon-sm"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 15H13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8 22H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9 2.00098C6.37454 2.00933 4.9565 2.08726 3.91891 2.81379C3.48891 3.11488 3.1149 3.48888 2.81382 3.91888C2 5.08113 2 6.72074 2 9.99997C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C21.9127 15.0435 21.9906 13.6254 21.999 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19.5 4.14631L19.563 4.10086C20.6208 3.3371 21.1498 2.95522 21.5749 3.13961C22 3.324 22 3.9353 22 5.15791V5.84209C22 7.0647 22 7.676 21.5749 7.86039C21.1498 8.04478 20.6208 7.6629 19.563 6.89914L19.5 6.85369M15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.5 8.10301 19.5 7.38118 19.5 5.9375V5.0625C19.5 3.61882 19.5 2.89699 18.9874 2.44849C18.4749 2 17.6499 2 16 2H15.5C13.8501 2 13.0251 2 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Online Course
            </summary>
            <ul>
              <li>
                <a
                  className="flex list-none items-center gap-2 rounded-md bg-custom-tertiary-light px-3 py-2"
                  href="#"
                >
                  <span className="icon-sm" />
                  <span className="icon grid place-content-center opacity-30">
                    ●
                  </span>
                  Overview
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary className="flex list-none items-center gap-2 rounded-md py-2 pl-2">
              <svg
                className="icon-sm"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00003 1C1.00003 1 4 3.66667 5 5C4 6.33333 1 9 1 9"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5704 21H10.507C6.49678 21 4.49165 21 3.24583 19.4542C2 17.9083 2 15.4204 2 10.4444V7.21895C2 5.30157 2 4.34287 2.32354 3.62351C2.55416 3.11072 2.89517 2.68761 3.30843 2.40145C3.88819 2 4.66083 2 6.20611 2C7.19611 2 7.69111 2 8.12443 2.20162C9.11377 2.66196 9.52173 3.77711 9.96816 4.88497L10.507 6.22222M7.00413 6.22222H15.5487C17.3409 6.22222 18.2369 6.22222 18.8806 6.7559C19.1593 6.98694 19.3986 7.28381 19.5848 7.62958C19.8747 8.16804 19.9692 8.84883 20 9.91667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4.5956 12.5755C5.02693 11.4264 5.24259 10.8518 5.66347 10.491C6.34287 9.90853 7.31965 10.0062 8.15669 10.0062H17.2524C19.7292 10.0062 20.9676 10.0062 21.5856 10.8031C22.6464 12.1711 21.3949 14.3902 20.8908 15.7332C19.9871 18.141 19.5352 19.3449 18.6352 20.0791C17.2638 21.1979 15.269 20.9835 13.6139 20.9835H9.93724C6.3942 20.9835 4.62269 20.9835 3.70143 19.8866C2.00075 17.8617 3.83072 14.6133 4.5956 12.5755Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Projects
            </summary>
            <ul>
              <li>
                <a
                  className="flex list-none items-center gap-2 rounded-md bg-custom-tertiary-light px-3 py-2"
                  href="#"
                >
                  <span className="icon-sm" />
                  <span className="icon grid place-content-center opacity-30">
                    ●
                  </span>
                  Projects
                </a>
              </li>
            </ul>
          </details>
        </nav>
      </section>
    </aside>
  );
}

export default Sidebar;
