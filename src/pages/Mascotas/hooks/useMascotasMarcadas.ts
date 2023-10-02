import { useState } from "react";
import { ObjectSend } from "../../../domain/Mascotas/ObjectSend";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { IMascota } from "../../../domain/Mascotas/IMascota";
import { mascotasSelector } from "../../../redux/User/user.selector";
import { useAppSelector } from "../../../store/store";

export const useMascotasMarcadas = () => {

  const mascotas = useAppSelector(mascotasSelector);


  const [checked, setChecked] = useState<ObjectSend[]>([]);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

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
      newChecked.length > 0 && newChecked.length !== mascotas.length
    );
    setCheckAll(newChecked.length === mascotas.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      const allObjects = mascotas.map((item) => ({
        idMascota: item.idMascota,
        nombre: item.nombre,
        edad: item.edad,
      }));
      setChecked(allObjects);
      setSelectedAll(true);
    } else {
      setChecked([]);
      setSelectedAll(false);
    }
    setCheckAll(e.target.checked);
  };

  return {
    checked,
    setChecked,
    indeterminate,
    setIndeterminate,
    checkAll,
    setCheckAll,
    selectedAll,
    onCheckChange,
    onCheckAllChange,
    setSelectedAll,
  };
};
