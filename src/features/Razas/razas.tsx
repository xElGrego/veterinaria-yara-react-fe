import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAddRazaRequest } from "../../domain/Razas/IAddRaza";
import { RazasForm } from "./Components/RazasForm";

export const Razas: FC = () => {
  const razasForm: IAddRazaRequest = {
    nombre: "",
    descripcion: "",
  };

  const schema = yup.object().shape({
    idRaza: yup.string().optional(),
    nombre: yup.string().required("El nombre es requerido."),
    descripcion: yup.string().required("La descripcion es requerido."),
  });

  const methods = useForm<IAddRazaRequest>({
    resolver: yupResolver(schema),
    defaultValues: razasForm,
  });

  return (
    <FormProvider {...methods}>
      <RazasForm />
    </FormProvider>
  );
};
