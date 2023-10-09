import { useEffect, useState } from "react";
import { IMascota } from "../../../../../domain/Mascotas/IMascota";
import useGetMascotasUsuarios from "../../../../../application/Mascotas/getUsariosMascotas";

export const useUsuariosMascotas = () => {
  const [mascotas, setMascotas] = useState<IMascota[]>([]);

  const { getMascotas } = useGetMascotasUsuarios();

  async function loadMascotas() {
    const res = await getMascotas(
      0,
      10,
      "b08f6773-96c5-4e77-b0c0-00a10a149c16"
    );
    setMascotas(res);
  }

  useEffect(() => {
    console.log("effect mascota usuarios");
    loadMascotas();
  }, []);

  return { mascotas };
};
