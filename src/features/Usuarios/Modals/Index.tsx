import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Drawer } from "antd";
import { IAddUsuarioRequest } from "../../../domain/User/IAddUsuario";
import { ContentModalUsuario } from "./Modal";

export const ModalUsuarioIndex: FC = () => {
  const mascotaForm: IAddUsuarioRequest = {
    idUsuario: "",
    nombres: "",
    apellidos: "",
    correo: "",
    clave: "",
    rol: [""],
  };

  const methods = useForm<IAddUsuarioRequest>({
    defaultValues: mascotaForm,
  });

  return (
    <FormProvider {...methods}>
      <div className=" w-full flex justify-end"></div>
      <ContentModalUsuario />
    </FormProvider>
  );
};
