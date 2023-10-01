import { useContext } from "react";
import ReporteContext, { IReportesContext } from "../ReporteProvider";
import useQuantityComprobantes from "../hooks/useQuantityComprobantes";

const HeaderItems = () => {
  const { ListItemsPerUpload } = useContext(ReporteContext) as IReportesContext;

  const { ComprobantesQuantity } = useQuantityComprobantes(
    ListItemsPerUpload || []
  );

  return (
    <div>
      {ListItemsPerUpload !== null && (
        <div className="lg:flex md:flex hidden gap-2 ">
          <div className="border text-center px-3 dark:bg-white rounded-sm">
            Factura
            <p>{ComprobantesQuantity["Factura"]}</p>
          </div>
          <div className="border text-center px-3 dark:bg-white rounded-sm">
            N/C
            <p>{ComprobantesQuantity["Notas de Crédito"]}</p>
          </div>
          <div className="border text-center px-3 dark:bg-white rounded-sm">
            N/D
            <p>{ComprobantesQuantity["Notas de Débito"]}</p>
          </div>
          <div className="border text-center px-3 dark:bg-white rounded-sm">
            RET
            <p>{ComprobantesQuantity["Comprobante de Retención"]}</p>
          </div>
          <div className="border text-center px-3 dark:bg-white rounded-sm">
            G.REMI
            <p>{ComprobantesQuantity["Guías de Remisión"]}</p>
          </div>
          <div className="border text-center px-3 dark:bg-white rounded-sm">
            LIQ. COMP.
            <p>
              {
                ComprobantesQuantity[
                  "Liquidación de compra de bienes y prestación de servicios"
                ]
              }
            </p>
          </div>
          <div className="border text-center px-3 dark:bg-white rounded-sm">
            TOTAL
            <p>{ComprobantesQuantity["Total"]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderItems;
