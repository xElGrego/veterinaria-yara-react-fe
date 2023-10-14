import { FC } from "react";
import { useAppSelector } from "../../../store/store";
import { rolSelector } from "../../../redux/User/user.selector";

export const withAuthorizationButton =
  <P extends object>(WrappedComponent: FC<P>) =>
  (props: P) => {
    const rol = useAppSelector(rolSelector);
    const isSuperAdmin = rol.includes("SuperAdministrador");

    return isSuperAdmin ? <WrappedComponent {...props} /> : null;
  };
