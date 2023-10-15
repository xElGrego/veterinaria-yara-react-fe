import { FC } from "react";
import { ButtonPermission } from "./ButtonPermission";

export const UsuariosForm: FC = () => {
  const handleClick = () => {
    alert("Agregar usuario");
  };

  return (
    <>
      <div className=" mt-4 flex justify-between gap-4">
        <div>
          <ButtonPermission onClick={handleClick} />
        </div>
      </div>
    </>
  );
};
