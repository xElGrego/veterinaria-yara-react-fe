import { useState } from "react";
import { InputSelectOptionsEmpresa } from "../Components/Inputs/InputRaza";

export function useRazaSelection() {
  const [selectedOption, setSelectedOption] =
    useState<InputSelectOptionsEmpresa>({
      value: "0",
      label: "Selecciona una mascota",
    });

  const handleSelectChange = (newValue: InputSelectOptionsEmpresa | null) => {
    if (newValue) {
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
