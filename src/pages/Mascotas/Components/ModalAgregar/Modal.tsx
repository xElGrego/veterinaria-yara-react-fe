import { FC, useContext, useEffect, useState } from "react";
import { Button } from "../Button";
import { IAddMascotaRequest } from "../../../../domain/Mascotas/IAddMascota";
import { useFormContext } from "react-hook-form";
import { InputText } from "../../../../shared/Components/InputText";
import { Spinner } from "../../../../shared/Components/Spinner";
import usePostMascotas from "../../../../application/Mascotas/postMascotas";
import { toast } from "react-toastify";
import { InputRaza } from "../../../../shared/Components/Inputs/InputRaza";
import MascotaContext, { IMascotasContext } from "../../MascotasProvider";
import usePutMascotas from "../../../../application/Mascotas/putMascota";
import { useAppSelector } from "../../../../store/store";
import { razaSelector } from "../../../../redux/Razas/razas.selector";
import { useSelector } from "react-redux";

export const ContentModal: FC = () => {
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useFormContext<IAddMascotaRequest>();

  const { postMascotas } = usePostMascotas();
  const { putMascotas } = usePutMascotas();

  const { dataLoaded, Mascotas, IsEditing, idMascotaSeleccionada } = useContext(
    MascotaContext
  ) as IMascotasContext;

  useEffect(() => {
    if (IsEditing && idMascotaSeleccionada) {
      const mascotaEditando = Mascotas.find(
        (m) => m.idMascota === idMascotaSeleccionada
      );
      if (mascotaEditando) {
        reset(mascotaEditando);
      }
    }
  }, [IsEditing, idMascotaSeleccionada, reset, Mascotas]);

  const razaSelected = useAppSelector(razaSelector);

  const handlerAgregarEditar = async () => {
    try {
      const params: IAddMascotaRequest = { ...getValues() };
      params.idUsuario = "B08F6773-96C5-4E77-B0C0-00A10A149C16"; //! SETEADO
      params.idRaza = razaSelected?.idRaza;
      if (IsEditing && idMascotaSeleccionada) {
        params.idMascota = idMascotaSeleccionada;
        var res = await putMascotas(params);
        toast.success(res.response);
      } else {
        var res = await postMascotas(params);
        toast.success(res.response);
        reset();
      }
    } catch (error) {
      toast.error(
        idMascotaSeleccionada
          ? "Error al editar a la mascota"
          : "Error al ingresar a la mascota"
      );
    }
  };

  const handlerLimpiar = () => {
    reset();
  };

  const razas = useSelector((store: any) => store.razas.razas);

  const [updateKey, setUpdateKey] = useState(0);

  useEffect(() => {
    setUpdateKey((prevKey) => prevKey + 1);
  }, [razas]);

  return (
    <form onSubmit={handleSubmit(handlerAgregarEditar)} className="py-4">
      <div className="flex justify-end"></div>
      <div>
        {dataLoaded ? (
          <InputRaza
            name="Razas"
            title="Razas"
            key={updateKey} // Cambiar la "clave" forzará una actualización del componente
          />
        ) : (
          <div className="lg:col-span-2 my-auto pt-7 dark:text-white text-sm flex mx-auto">
            <Spinner class="w-5 h-5 text-blue-600 dark:text-white" />
            Cargando mascotas...
          </div>
        )}

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
        <Button
          title={idMascotaSeleccionada ? "Editar" : "Agregar"}
          type="submit"
        />
        <Button
          onClick={handlerLimpiar}
          title="Limpiar"
          backgroundColor="bg-red-600"
        />
      </div>
    </form>
  );
};
