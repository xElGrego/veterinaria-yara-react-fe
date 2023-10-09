import { useEffect, useState } from "react";
import { IMascota } from "../../../../../domain/Mascotas/IMascota";
import useGetMascotasUsuarios from "../../../../../application/Mascotas/getUsariosMascotas";

export const useUsuariosMascotas = (idUsuario: Guid) => {
  const [mascotas, setMascotas] = useState<IMascota[]>([]);

  const { getMascotas } = useGetMascotasUsuarios();

  async function loadMascotas() {
    const res = await getMascotas(0, 10, idUsuario);
    const sortedMascotas = res.sort((a, b) => a.orden - b.orden);
    setMascotas(sortedMascotas);
  }

  const reorderMascotas = (startIndex: number, endIndex: number) => {
    const updatedMascotas = [...mascotas];
    const [reorderedMascota] = updatedMascotas.splice(startIndex, 1);
    updatedMascotas.splice(endIndex, 0, reorderedMascota);
    updatedMascotas.forEach((mascota, index) => {
      mascota.orden = index + 1;
    });

    setMascotas(updatedMascotas);
    debugger;
  };

  useEffect(() => {
    loadMascotas();
  }, []);

  return { mascotas, reorderMascotas };
};
