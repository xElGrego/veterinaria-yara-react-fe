type ComprobanteType =
  | "Guías de Remisión"
  | "Liquidación de compra de bienes y prestación de servicios"
  | "Factura"
  | "Notas de Crédito"
  | "Notas de Débito"
  | "Comprobante de Retención"
  | "Total";

export interface IComprobanteTxt {
  Comprobante: ComprobanteType;
  SerieComprobante: string;
  RucEmisor: string;
  ClaveAcceso: string;
  NumeroAutorizacion: string;
  FechaEmision: string;
  FechaAutorizacion: string;
  TipoEmision: string;
  IdentificacionReceptor: string;
  ImporteTotal: string;
}

const useUnconvertedTxt = () => {
  const handleProcessDocuments = async (
    files: FileList
  ): Promise<IComprobanteTxt[]> => {
    const filePromises = Object.keys(files).map(
      async (i: any) =>
        new Promise((resolve, reject) => {
          const datos: IComprobanteTxt[] = [];
          const reader = new FileReader();
          reader.onload = async (e: any) => {
            try {
              const fl = await e.target.result;
              const allLines = fl.split(/\n/);
              allLines.map((el: string) => {
                const parsedInformation = el.split("\t");
                if (/^\d{3}-\d{3}-\d{9}$/.test(parsedInformation[1])) {
                  datos.push({
                    Comprobante: parsedInformation[0] as ComprobanteType,
                    SerieComprobante: parsedInformation[1],
                    RucEmisor: parsedInformation[2],
                    ClaveAcceso: parsedInformation[3],
                    NumeroAutorizacion: parsedInformation[4],
                    FechaEmision: parsedInformation[5],
                    FechaAutorizacion: parsedInformation[6],
                    TipoEmision: parsedInformation[7],
                    IdentificacionReceptor: parsedInformation[8],
                    ImporteTotal: parsedInformation[9],
                  });
                }
              });
              resolve(datos);
            } catch (err) {
              reject(err);
            }
          };
          reader.readAsBinaryString(files[i]);
        })
    );

    const fileInfos = await Promise.all(filePromises);

    const parsedTotal = fileInfos.reduce((a: any, b: any) => [...a, ...b]);

    return parsedTotal as IComprobanteTxt[];
  };

  const funcionCualquier = (texto: string) => {
    if (texto.includes("Comprobante de Reten")) {
      return "Comprobante de Retención" as ComprobanteType;
    }
    if (texto.includes("Notas de Cr")) {
      return "Notas de Crédito" as ComprobanteType;
    }
    if (texto.includes("Notas de D")) {
      return "Notas de Débito" as ComprobanteType;
    }
    if (texto.includes("Factura")) {
      return "Factura" as ComprobanteType;
    }
    if (texto.includes("Liquida")) {
      return "Liquidación de compra de bienes y prestación de servicios" as ComprobanteType;
    }
    if (texto.includes("Gu")) {
      return "Guías de Remisión" as ComprobanteType;
    }
  };

  const handleProcessDocument = async (
    file: File
  ): Promise<IComprobanteTxt[]> => {
    const filePromise = new Promise((resolve, reject) => {
      const datos: IComprobanteTxt[] = [];
      const reader = new FileReader();
      reader.onload = async (e: any) => {
        try {
          const fl = await e.target.result;
          const allLines = fl.split(/\n/);
          allLines.map(async (el: string) => {
            const parsedInformation = el.split("\t");
            if (/^\d{3}-\d{3}-\d{9}$/.test(parsedInformation[1])) {
              datos.push({
                Comprobante: funcionCualquier(
                  parsedInformation[0]
                ) as ComprobanteType,
                SerieComprobante: parsedInformation[1],
                RucEmisor: parsedInformation[2],
                ClaveAcceso: parsedInformation[9],
                NumeroAutorizacion: parsedInformation[10],
                FechaEmision: parsedInformation[4],
                FechaAutorizacion: parsedInformation[5],
                TipoEmision: parsedInformation[6],
                IdentificacionReceptor: parsedInformation[8],
                ImporteTotal: parsedInformation[11],
              });
            }
          });
          resolve(datos);
        } catch (err) {
          reject(err);
        }
      };
      reader.readAsBinaryString(file);
    });

    const fileInfos = await Promise.resolve(filePromise);

    return fileInfos as IComprobanteTxt[];
  };
  return {
    handleProcessDocuments,
    handleProcessDocument,
  };
};

export default useUnconvertedTxt;
