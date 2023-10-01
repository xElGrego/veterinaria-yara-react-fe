import { FC } from "react";
import { SideBar } from "./Components/Header";
import { Outlet } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div className="flex gap-6">
      <SideBar />
      <Outlet />
    </div>
  );
};
