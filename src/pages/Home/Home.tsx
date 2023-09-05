import { FC } from "react";
import { useAppSelector } from "../../store/store";
import { nombreSelector } from "../../redux/User/user.selector";
import { Header } from "./Components/Header";

export const Home: FC = () => {
  const nombre = useAppSelector(nombreSelector);

  return (
    <div className="flex gap-6">
      <Header />
      <div className="m3 text-xl text-gray-900 font-semibold">Router</div>
    </div>
  );
};
