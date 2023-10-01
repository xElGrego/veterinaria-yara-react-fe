import { useState, useEffect } from "react";
import { IComprobanteTxt } from "./useConvertedTxt";

export interface IQuantityHandler {
  "Guías de Remisión": number;
  "Liquidación de compra de bienes y prestación de servicios": number;
  Factura: number;
  "Notas de Crédito": number;
  "Notas de Débito": number;
  "Comprobante de Retención": number;
  Total: number;
}

const useQuantityComprobantes = (ElementsList: IComprobanteTxt[]) => {
  const QuantityHandlerInitalState: IQuantityHandler = {
    "Guías de Remisión": 0,
    Factura: 0,
    "Notas de Crédito": 0,
    "Notas de Débito": 0,
    "Comprobante de Retención": 0,
    Total: 0,
    "Liquidación de compra de bienes y prestación de servicios": 0,
  };

  const [TotalComp, setTotalComp] = useState<IQuantityHandler>(
    QuantityHandlerInitalState
  );

  const calculateListValues = (): IQuantityHandler => {
    const ItemsQuantity: IQuantityHandler = {
      ...QuantityHandlerInitalState,
    };

    ElementsList.map((a: IComprobanteTxt) => {
      ItemsQuantity[a.Comprobante] += 1;
    });
    ItemsQuantity["Total"] = ElementsList.length;
    return ItemsQuantity;
  };

  useEffect(() => {
    if (ElementsList.length > 0) {
      const vals: IQuantityHandler = calculateListValues();
      setTotalComp({
        "Guías de Remisión": vals["Guías de Remisión"],
        Factura: vals["Factura"],
        "Notas de Crédito": vals["Notas de Crédito"],
        "Notas de Débito": vals["Notas de Débito"],
        "Comprobante de Retención": vals["Comprobante de Retención"],
        "Liquidación de compra de bienes y prestación de servicios":
          vals["Liquidación de compra de bienes y prestación de servicios"],
        Total: vals["Total"],
      });
    }
  }, [ElementsList]);

  return {
    ComprobantesQuantity: TotalComp,
  };
};

export default useQuantityComprobantes;
