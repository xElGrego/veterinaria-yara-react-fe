import { FC, useState } from "react";
import { ButtonPermission } from "./ButtonPermission";
import { ModalGeneral } from "../../../shared/Components/Modal/ModalGeneral";
import { ModalUsuarioIndex } from "../Modals/Index";

export const UsuariosForm: FC = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const handlerOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {IsOpen && (
        <ModalGeneral
          title={"Agregando usuario"}
          isOpen={IsOpen}
          onClose={handlerOpen}
        >
          <ModalUsuarioIndex />
        </ModalGeneral>
      )}
      <div className=" mt-4 flex justify-between gap-4">
        <div>
          <ButtonPermission onClick={handlerOpen} />
        </div>
      </div>
    </>
  );
};
