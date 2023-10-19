import { FC } from "react";
import { IAddUsuarioRequest } from "../../../domain/User/IAddUsuario";
import { InputText } from "../../../shared/Components/InputText";
import { Button } from "../../../shared/Components/Buttons/Button";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";

export const ContentModalUsuario: FC = () => {
  const { handleSubmit, register, getValues, reset, control } =
    useFormContext<IAddUsuarioRequest>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rol",
  });

  const handlerAgregarEditar = async () => {
    try {
      const params: IAddUsuarioRequest = { ...getValues() };
      console.log("Params" + JSON.stringify(params));
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

        {fields.map((item, index) => (
          <div key={item.id}>
            <Controller
              name={`rol[${index}].name`}
              control={control}
              render={({ field }) => (
                <InputText label="Rol" name={field.name} register={register} />
              )}
            />

            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            append({ name: "" });
          }}
        >
          Add Rol
        </button>
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
