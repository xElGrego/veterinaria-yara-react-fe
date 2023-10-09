import { useEffect, useState } from "react";
import { IMascota } from "../../../../../domain/Mascotas/IMascota";
import useGetMascotasUsuarios from "../../../../../application/Mascotas/getUsariosMascotas";
import { BehaviorSubject } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators";
import { useOrdenartMascotas } from "../../../../../application/Mascotas/ordenarMascota";

export const useUsuariosMascotas = (idUsuario: Guid) => {
  const [mascotas, setMascotas] = useState<IMascota[]>([]);
  const reorderSubject = new BehaviorSubject<IMascota[]>(mascotas);
  const [hasChanged, setHasChanged] = useState(false); // Variable para controlar si ha habido cambios

  const { orderMascotas } = useOrdenartMascotas();

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
    reorderSubject.next(updatedMascotas);
    setHasChanged(true); // Cambia a true solo después de la reordenación
  };

  useEffect(() => {
    loadMascotas();
  }, []);

  const orderedMascotasObservable = reorderSubject
    .pipe(debounceTime(1000))
    .pipe(
      distinctUntilChanged((prev, current) => {
        return JSON.stringify(prev) === JSON.stringify(current);
      })
    )
    .pipe(
      switchMap((newOrder) => {
        const mascotasParaEnviar = newOrder.map((mascota, index) => ({
          idMascota: mascota.idMascota,
          orden: index + 1,
        }));
        return orderMascotas(mascotasParaEnviar);
      })
    );

  useEffect(() => {
    const subscription = orderedMascotasObservable.subscribe((response) => {});

    return () => {
      subscription.unsubscribe();
    };
  }, [orderedMascotasObservable]);

  return { mascotas, reorderMascotas, orderedMascotasObservable };
};
