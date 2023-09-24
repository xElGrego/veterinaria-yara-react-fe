import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MascotasForm } from "./Components/MascotasForm";
import { MascotaRequest } from "../../domain/Mascotas/IMascota";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Mascotas: FC = () => {
  const mascotasForm: MascotaRequest = {
    nombre: "",
    descripcion: "",
    estado: 0,
    start: 0,
    length: 10,
  };

  const schema = yup.object().shape({
    nombre: yup.string().optional(),
    descripcion: yup.string().optional(),
    estado: yup.number().required("El estado es obligatorio"),
    start: yup.number().optional(),
    length: yup.number().optional(),
  });

  const methods = useForm<MascotaRequest>({
    resolver: yupResolver(schema),
    defaultValues: mascotasForm,
  });

  return (
    <FormProvider {...methods}>
      <MascotasForm />
    </FormProvider>
  );
};
