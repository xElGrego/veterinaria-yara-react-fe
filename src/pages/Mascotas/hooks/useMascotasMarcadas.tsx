import { useState, useEffect, useContext } from "react";
import { ObjectSend } from "../../../domain/Mascotas/ObjectSend";
import MascotaContext, { IMascotasContext } from "../MascotasProvider";
import { CheckboxChangeEvent } from "rc-checkbox";

export const useMascotasMarcadas = () => {
  const { Mascotas, checked, setChecked, setIndeterminate, setCheckAll } =
    useContext(MascotaContext) as IMascotasContext;

  const onCheckChange = (value: ObjectSend) => {
    const newChecked = [...checked];
    const index = newChecked.findIndex(
      (item) => item.idMascota === value.idMascota
    );

    if (index === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(index, 1);
    }

    setChecked(newChecked);
    setIndeterminate(
      newChecked.length > 0 && newChecked.length !== Mascotas.length
    );
    setCheckAll(newChecked.length === Mascotas.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      const allObjects = Mascotas.map((item) => ({
        idMascota: item.idMascota,
        nombre: item.nombre,
        edad: item.edad,
      }));
      setChecked(allObjects);
    } else {
      setChecked([]);
    }
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    setIndeterminate(checked.length > 0 && checked.length !== Mascotas.length);
  }, [checked, Mascotas]);

  return {
    checked,
    onCheckChange,
    onCheckAllChange,
  };
};
