import React from "react";
import Header from "../admin/components/Header";
import Sidebar from "../admin/components/Sidebar";

export default function AdminLayout() {
  return (
    <div className="h-screen max-h-[100vh] w-screen max-w-[100vw] overflow-hidden border font-inter">
      <Sidebar />
      <main className="relative flex h-screen max-w-[100%] flex-col bg-custom-secondary-light lg:left-[250px] lg:w-[calc(100%-250px)]">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
