import { toast } from "react-toastify";
import { useAppSelector } from "../../store/store";
import { rolSelector } from "../../redux/User/user.selector";


export const usePermissionCheck = (onClick: () => void) => {
    const rol = useAppSelector(rolSelector);
    const isSuperAdmin = rol.includes("SuperAdministrador");

    const handleClick = () => {
        if (isSuperAdmin) {
            onClick();
        } else {
            toast.info("No tienes permisos de SuperAdministrador.");
        }
    };

    return handleClick;
};