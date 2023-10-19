import { FC, useContext } from "react";
import { useAppSelector } from "../../../store/store";
import { idUsuarioSelector } from "../../../redux/User/user.selector";
import { useFormContext } from "react-hook-form";
import { IAddUsuarioRequest } from "../../../domain/User/IAddUsuario";
import MascotaContext, { IMascotasContext } from "../../Mascotas/provider";
import { InputText } from "../../../shared/Components/InputText";
import { Button } from "../../../shared/Components/Buttons/Button";

export const ContentModalUsuario: FC = () => {
  const idUsuario = useAppSelector(idUsuarioSelector);

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useFormContext<IAddUsuarioRequest>();

  const handlerAgregarEditar = async () => {
    try {
      const params: IAddUsuarioRequest = { ...getValues() };
      debugger;
    } catch (error) {}
  };

  const handlerLimpiar = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handlerAgregarEditar)} className="py-4">
      <div>
        <InputText label="Nombres" name="nombres" register={register} />
        <InputText label="Apellidos" name="apellidos" register={register} />
        <InputText label="Correo" name="correo" register={register} />
        <InputText label="Clave" name="clave" register={register} />
      </div>
      <br />
      <div className="flex gap-4 justify-end">
        <Button title={"Agregar"} type="submit" />
        <Button
          onClick={handlerLimpiar}
          title="Limpiar"
          backgroundColor="bg-red-600"
        />
      </div>
    </form>
  );
};
