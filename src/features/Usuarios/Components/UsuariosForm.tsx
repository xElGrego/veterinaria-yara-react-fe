import { FC } from "react";
import { withAuthorizationButton } from "../../../shared/HOC/Autorizaation/withAuthorizationButton";
import { useAppSelector } from "../../../store/store";
import { rolSelector } from "../../../redux/User/user.selector";
import { toast } from "react-toastify";

export const UsuariosForm: FC = () => {
  const rol = useAppSelector(rolSelector);
  const isSuperAdmin = rol.includes("SuperAdministrador");

  const handleClick = () => {
    if (!isSuperAdmin) {
      toast.info("No tiene permisos");
    }

    console.log("Agregar usuario");
  };

  return (
    <>
      <div className=" mt-4 flex justify-between gap-4">
        <div>
          <button
            type="button"
            onClick={handleClick}
            className="inline-block rounded bg-neutral-800 px-4 pb-2 pt-2.5 text-xs font-normal   text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

const UsuariosFormWithAuthorization = withAuthorizationButton(UsuariosForm);

export default UsuariosFormWithAuthorization;
