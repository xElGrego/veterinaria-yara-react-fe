import { FC } from "react";
import { withPermissionCheck } from "../../../shared/HOC/Autorizaation/withPermisionButton";
import { ButtoPermisionWithPermissions } from "./ButtonTest";

export const UsuariosForm: FC = () => {
  const handleClick = () => {
    console.log("Agregar usuario");
  };

  return (
    <>
      <div className=" mt-4 flex justify-between gap-4">
        <div>
          <ButtoPermisionWithPermissions onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

const ButtonWithPermission = withPermissionCheck(UsuariosForm);

export default ButtonWithPermission;
