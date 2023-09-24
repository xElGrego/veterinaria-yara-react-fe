import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { useToastify } from "../../../hooks/Toastify";
import { InputText } from "../../../shared/Components/InputText";
import useEstados from "../../../shared/hooks/useEstados";
import InputSelect from "../../../shared/Components/InputSelect";
import { MascotaRequest } from "../../../domain/Mascotas/IMascota";

export const MascotasForm: FC = () => {
  const { onError } = useToastify();
  const { EstadosList, IsLoading: loadingEstados } = useEstados();

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useFormContext<MascotaRequest>();

  const handlerConsultar = async () => {
    try {
      const params: MascotaRequest = { ...getValues() };
      console.log("Params" + JSON.stringify(params));
    } catch (error) {
      onError("Hubo un error.");
    }
  };

  const handlerLimpiar = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handlerConsultar)} className="py-4">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        <InputText
          label="Nombre"
          name="nombre"
          error={errors.nombre?.message}
          register={register}
        />
        <InputText
          label="Descripcion"
          name="descripcion"
          error={errors.descripcion?.message}
          register={register}
        />
        <InputSelect
          name="estado"
          register={register}
          title="Estado"
          options={
            loadingEstados
              ? [{ value: 0, title: "Cargando..." }]
              : [...EstadosList]
          }
        />
      </div>
      <div className=" mt-4 flex justify-end gap-4">
        <button
          type="submit"
          className="inline-block rounded bg-neutral-800 px-4 pb-2 pt-2.5 text-xs font-normal   text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
        >
          Consultar
        </button>
        <button
          type="button"
          onClick={handlerLimpiar}
          className="inline-block rounded bg-neutral-800 px-4 pb-2 pt-2.5 text-xs font-normal   text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
        >
          Limpiar
        </button>
      </div>
    </form>
  );
};
