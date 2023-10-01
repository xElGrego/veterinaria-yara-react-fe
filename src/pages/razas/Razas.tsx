import { FC } from "react";
import { RazaRequest } from "../../domain/Razas/Razas";
import { FormProvider, useForm } from "react-hook-form";
import { RazasForm } from "./Components/RazasForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Razas: FC = () => {
  const razasForm: RazaRequest = {
    nombre: "",
    descripcion: "",
  };

  const schema = yup.object().shape({
    idRaza: yup.string().optional(),
    nombre: yup.string().required("El nombre es requerido."),
    descripcion: yup.string().required("La descripcion es requerido."),
  });

  const methods = useForm<RazaRequest>({
    resolver: yupResolver(schema),
    defaultValues: razasForm,
  });

  return (
    <FormProvider {...methods}>
      <RazasForm />
    </FormProvider>
  );
};
