import { FC } from "react";
import { rolSelector } from "../../../redux/User/user.selector";
import { useAppSelector } from "../../../store/store";
import { toast } from "react-toastify";

interface ComponentProps {
  onClick: () => void;
}

export const withPermissionCheck = <P extends ComponentProps>(
  WrappedComponent: FC<P>
) => {
  const UsuariosFormWithPermissions: FC<P> = (props) => {
    const rol = useAppSelector(rolSelector);
    const isSuperAdmin = rol.includes("SuperAdministrador");

    const handleClick = () => {
      if (isSuperAdmin) {
        props.onClick();
      } else {
        toast.info("No tienes permisos de SuperAdministrador.");
      }
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };

  return UsuariosFormWithPermissions;
};
