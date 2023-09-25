import { FC } from "react";
import { Button } from "../Button";
import { IAddMascotaRequest } from "../../../../domain/Mascotas/IAddMascota";
import { useFormContext } from "react-hook-form";
import { InputText } from "../../../../shared/Components/InputText";

export const ContentModal: FC = () => {
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useFormContext<IAddMascotaRequest>();

  const handlerAgregar = () => {
    const params: IAddMascotaRequest = { ...getValues() };
    console.log("Agregar" + JSON.stringify(params));
  };

  const handlerLimpiar = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handlerAgregar)} className="py-4">
      <div>
        <InputText
          label="Nombre"
          name="nombreMascota"
          error={errors.nombreMascota?.message}
          register={register}
        />
        <InputText
          label="Apodo"
          name="mote"
          error={errors.mote?.message}
          register={register}
        />
        <InputText
          label="Edad"
          name="edad"
          error={errors.edad?.message}
          register={register}
        />
        <InputText
          label="Peso"
          name="peso"
          error={errors.peso?.message}
          register={register}
        />
      </div>

      <br />
      <div className="flex gap-4 justify-end">
        <Button onClick={handlerAgregar} title="Agregar" type="submit" />
        <Button
          onClick={handlerLimpiar}
          title="Limpiar"
          backgroundColor="bg-red-600"
        />
      </div>
    </form>
  );
};
