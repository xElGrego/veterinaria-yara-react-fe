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
      window.localStorage.setItem("razaSelected", newValue.value || "");
      if (newValue.label?.includes("-")) {
        var index = newValue.label?.lastIndexOf("-");
        const result1 = newValue.label?.substr(index + 1).trim();
        window.localStorage.setItem("razaSelectedRuc", result1.trim() || "");
      } else {
        window.localStorage.setItem("razaSelectedRuc", newValue.label! || "");
      }
      try {
        setSelectedOption(newValue);

        if (newValue.value === "todos") {
        } else {
        }
      } catch (error) {}
    }
  };

  return {
    handleSelectChange,
    setSelectedOption,
    selectedOption,
  };
}
