import { FC } from "react";
import { IUsuariosRequest } from "../../domain/User/IUsuario";
import moment from "moment";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UsuariosList } from "./Components/UsuariosList";
import { UsuariosForm } from "./Components/UsuariosForm";

export const Usuarios: FC = () => {
  const mascotasForm: IUsuariosRequest = {
    nombre: "",
    estado: 1,
    start: 0,
    length: 10,
    fechaInicio: moment(new Date().toUTCString()).format("YYYY-MM-DD"),
    fechaFin: moment(new Date().toUTCString()).format("YYYY-MM-DD"),
  };

  const schema = yup.object().shape({
    idUsuario: yup.string().optional(),
    nombre: yup.string().optional(),
    estado: yup.number().required("El estado es obligatorio"),
    start: yup.number().required(),
    length: yup.number().required(),
    fechaFin: yup.string().optional(),
    fechaInicio: yup.string().optional(),
  });

  const methods = useForm<IUsuariosRequest>({
    resolver: yupResolver(schema),
    defaultValues: mascotasForm,
  });

  return (
    <FormProvider {...methods}>
      <UsuariosForm />
      {/*   <UsuariosFormWithAuthorization /> */}
      <UsuariosList />
    </FormProvider>
  );
};
