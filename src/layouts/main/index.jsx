import Home from "~/pages/home";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="text-white w-[79.063rem] mx-auto flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex gap-[1.875rem]">
        <Outlet />
        <Rightbar />
      </main>
    </div>
  );
}
