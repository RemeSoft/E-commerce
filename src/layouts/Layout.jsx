import { ModalProvider } from "../contexts/ModalContext";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Protected from "./Protected";
import "../index.css";

export default function AdminLayout() {
  return (
    <Protected>
      <ModalProvider>
        <div className="h-screen max-h-[100vh] w-screen max-w-[100vw] overflow-hidden border font-inter lg:text-sm">
          <Sidebar />
          <main className="relative flex h-screen max-w-[100%] flex-col bg-custom-secondary-light lg:left-[250px] lg:w-[calc(100%-250px)]">
            <Header />
            <Outlet />
          </main>
        </div>
      </ModalProvider>
    </Protected>
  );
}
