import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../admin/components/Header";
import Sidebar from "../admin/components/Sidebar";
import Protected from "../components/Protected";
import "../index.css";

export default function AdminLayout() {
  return (
    <Protected>
      <div className="lg:text-sm h-screen max-h-[100vh] w-screen max-w-[100vw] overflow-hidden border font-inter">
        <Sidebar />
        <main className="relative flex h-screen max-w-[100%] flex-col bg-custom-secondary-light lg:left-[250px] lg:w-[calc(100%-250px)]">
          <Header />
          <Outlet />
        </main>
      </div>
    </Protected>
  );
}
