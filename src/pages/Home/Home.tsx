import { FC } from "react";
import { useAppSelector } from "../../store/store";
import { nombreSelector } from "../../redux/User/user.selector";

export const Home: FC = () => {
  const nombre = useAppSelector(nombreSelector);

  return (
    <div>
      Dashboard
      <div>Nombre : {nombre}</div>
    </div>
  );
};
