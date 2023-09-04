import { useEffect, useState } from "react";
import { ToastContainer, toast, Id } from "react-toastify";

export const useToastify = () => {
  const [Data, setData] = useState<string>("");

  useEffect(() => {
    if (Data !== "") {
      toast.warning(Data, {
        isLoading: false,
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }, [Data]);

  const ToastComponent = () => (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover
      theme="dark"
      limit={1}
    />
  );

  const onError = (error: string) => {
    setData(error);
  };

  const onLoading = (message?: string) =>
    toast.loading(message || "Registrando solicitud...", {
      autoClose: 3000,
    });

  const onSuccess = (loaded: Id, message?: string) =>
    toast.update(loaded, {
      render: message || "Solicitud registrada con exito!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  const onSuccessDowload = (loaded: Id, message?: string) =>
    toast.update(loaded, {
      render: message || "Descarga Completa",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });

  const onDownloading = () =>
    toast.info("Procesando Solicitud...", {
      autoClose: false,
      hideProgressBar: true,
      position: "top-left",
    });

  const dismiss = () => {
    toast.dismiss();
  };

  return {
    ToastComponent,
    onError,
    onLoading,
    onSuccess,
    onDownloading,
    dismiss,
    onSuccessDowload,
  };
};
