import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ContentModal } from "./Modal";
import { IAddMascotaRequest } from "../../../../domain/Mascotas/IAddMascota";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalMascotaIndex: FC = () => {
  const mascotaForm: IAddMascotaRequest = {
    idMascota: "",
    idUsuario: "",
    idRaza: "",
    nombre: "",
    mote: "",
    edad: 0,
    peso: 0,
  };

  const schema = yup.object().shape({
    idMascota: yup.string().optional(),
    idUsuario: yup.string().required(),
    idRaza: yup.string().required(),
    nombre: yup.string().required(),
    mote: yup.string().optional(),
    edad: yup.number().required(),
    peso: yup.number().required(),
  });

  const methods = useForm<IAddMascotaRequest>({
    resolver: yupResolver(schema),
    defaultValues: mascotaForm,
  });

  return (
    <FormProvider {...methods}>
      <ContentModal />
    </FormProvider>
  );
};
