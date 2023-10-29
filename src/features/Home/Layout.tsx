import { FC } from "react";
import { SideBar } from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div className="flex gap-6">
      <SideBar />
      <Outlet />
    </div>
  );
};
