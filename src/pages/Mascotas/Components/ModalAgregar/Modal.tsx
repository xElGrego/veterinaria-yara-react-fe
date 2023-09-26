import { FC } from "react";
import { Button } from "../Button";
import { IAddMascotaRequest } from "../../../../domain/Mascotas/IAddMascota";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { InputText } from "../../../../shared/Components/InputText";
import { InputRaza } from "../../../../shared/Components/Inputs/InputRaza";

export const ContentModal: FC = () => {
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    control,
    formState: { errors },
  } = useFormContext<IAddMascotaRequest>();

  const handlerAgregar = () => {
    const params: IAddMascotaRequest = { ...getValues() };
    console.log("Agregar" + JSON.stringify(params));
  };

  const handlerLimpiar = () => {
    reset();
  };

  const idRaza = useWatch({
    control,
    name: "idRaza", // Nombre del campo
    defaultValue: "", // Valor por defecto si es necesario
  });

  return (
    <form onSubmit={handleSubmit(handlerAgregar)} className="py-4">
      <div>
        <Controller
          name="idRaza"
          control={control}
          render={({ field }) => (
            <InputRaza
              {...field}
              name="idRaza"
              title="Raza"
              register={register}
            />
          )}
        />

        <p>Valor seleccionado: {idRaza}</p>

        <InputText
          label="Nombre"
          name="nombre"
          error={errors.nombre?.message}
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
        <Button title="Agregar" type="submit" />
        <Button
          onClick={handlerLimpiar}
          title="Limpiar"
          backgroundColor="bg-red-600"
        />
      </div>
    </form>
  );
};
