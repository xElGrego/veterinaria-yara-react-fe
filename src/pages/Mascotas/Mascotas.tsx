import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MascotaRequest } from "../../domain/Mascotas/MascotaRequest";
import { MascotasForm } from "./Components/MascotasForm";
import { TestRabbit } from "./Components/TestRabbit";

export const Mascotas: FC = () => {
  const initialStateForm: MascotaRequest = {
    nombre: "",
    descripcion: "",
    estado: "",
  };

  const methods = useForm<MascotaRequest>({
    defaultValues: initialStateForm,
  });

  return (
    <FormProvider {...methods}>
      <MascotasForm />
      <TestRabbit />
    </FormProvider>
  );
};
