import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ContentModal } from "./Modal";
import { IAddMascotaRequest } from "../../../../domain/Mascotas/IAddMascota";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Drawer } from "antd";
import { Razas } from "../../../Razas/razas";

export const ModalMascotaIndex: FC = () => {
  const mascotaForm: IAddMascotaRequest = {
    idRaza: "",
    nombre: "",
    mote: "",
    edad: 0,
    peso: 0,
  };

  const schema = yup.object().shape({
    idRaza: yup.string().optional(),
    nombre: yup.string().required("El nombre es obligatorio"),
    mote: yup.string().optional(),
    edad: yup.number().required(),
    peso: yup.number().required(),
  });

  const methods = useForm<IAddMascotaRequest>({
    resolver: yupResolver(schema),
    defaultValues: mascotaForm,
  });

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <FormProvider {...methods}>
      <div className=" w-full flex justify-end">
        <button
          className="bg-red-200 p-2 rounded-md"
          type="button"
          onClick={showDrawer}
        >
          Agregar raza
        </button>
      </div>
      <ContentModal />

      <Drawer
        title="Agregar raza"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Razas />
      </Drawer>
    </FormProvider>
  );
};
