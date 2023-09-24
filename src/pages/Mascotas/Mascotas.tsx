import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MascotasForm } from "./Components/MascotasForm";
import { MascotaRequest } from "../../domain/Mascotas/IMascota";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MascotasList } from "./Components/MascotasList";

export const Mascotas: FC = () => {
  const mascotasForm: MascotaRequest = {
    idUsuario: "",
    nombre: "",
    descripcion: "",
    estado: 0,
    start: 0,
    length: 10,
  };

  const schema = yup.object().shape({
    idUsuario: yup.string().optional(),
    nombre: yup.string().optional(),
    descripcion: yup.string().optional(),
    estado: yup.number().required("El estado es obligatorio"),
    start: yup.number().required(),
    length: yup.number().required(),
  });

  const methods = useForm<MascotaRequest>({
    resolver: yupResolver(schema),
    defaultValues: mascotasForm,
  });

  return (
    <FormProvider {...methods}>
      <MascotasForm />
      <MascotasList />
    </FormProvider>
  );
};
