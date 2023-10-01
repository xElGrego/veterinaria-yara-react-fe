import { useState } from "react";
import { InputSelectOptionsEmpresa } from "../Components/Inputs/InputRaza";
import { useDispatch } from "react-redux";
import { selectRaza } from "../../redux/Razas/razas.slice";

export function useRazaSelection() {
  const [selectedOption, setSelectedOption] =
    useState<InputSelectOptionsEmpresa>({
      value: "0",
      label: "Selecciona una mascota",
    });

  const dispatch = useDispatch();

  const handleSelectChange = (newValue: InputSelectOptionsEmpresa | null) => {
    if (newValue) {
      dispatch(selectRaza(newValue.value || ""));
      try {
        setSelectedOption(newValue);
      } catch (error) {}
    }
  };

  return {
    handleSelectChange,
    setSelectedOption,
    selectedOption,
  };
}
