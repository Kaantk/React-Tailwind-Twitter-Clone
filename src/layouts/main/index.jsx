import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import { Outlet } from "react-router-dom";
import { useModal } from "~/store/modal/hooks";
import Modal from "~/modals";
import { useAppearance } from "~/store/appearance/hooks";
import { useEffect } from "react";

export default function MainLayout() {
  const modal = useModal();
  const appearance = useAppearance();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--background-secondary",
      appearance.backgroundColor.secondary
    );
    document.documentElement.style.setProperty(
      "--background-third",
      appearance.backgroundColor.third
    );
    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.backgroundColor.secondary
    );
    document.documentElement.style.setProperty(
      "--color-third",
      appearance.backgroundColor.third
    );
    document.documentElement.style.setProperty(
      "--color-base",
      appearance.color.base
    );
    document.documentElement.style.setProperty(
      "--color-baseSecondary",
      appearance.color.baseSecondary
    );
    document.documentElement.style.setProperty(
      "--box-shadow",
      appearance.boxShadow
    );
  }, [appearance]);

  return (
    <div className="text-[color:var(--color-base)] w-[79.063rem] mx-auto flex min-h-screen">
      {modal.visible && <Modal />}
      <Sidebar />
      <main className="flex-1 flex gap-[1.875rem]">
        <Outlet />
        <Rightbar />
      </main>
    </div>
  );
}
