import { FC } from "react";
import { useAppSelector } from "../../store/store";
import { nombreSelector } from "../../redux/User/user.selector";
import { SideBar } from "./Components/Header";
import { Outlet } from "react-router-dom";

export const Home: FC = () => {
  const nombre = useAppSelector(nombreSelector);

  return (
    <div className="flex gap-6">
      <SideBar />
      <Outlet />
    </div>
  );
};
