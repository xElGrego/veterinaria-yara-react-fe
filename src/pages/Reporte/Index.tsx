import { FC } from "react";
import { ReporteProvider } from "./ReporteProvider";
import { ReporteForm } from "./ReporteForm";

export const ReporteIndex: FC = () => {
  return (
    <>
      <ReporteProvider>
        <section className="mx-2 rounded-lg px-4 py-2 mt-2 w-full">
          <div className="lg:flex md:flex justify-between items-center">
            <h2 className="font-semibold text-2xl dark:text-black">Reportes</h2>
          </div>
          <div className=" border-b my-2"></div>
          <div className="my-2 ">
            <ReporteForm />
          </div>
        </section>
      </ReporteProvider>
    </>
  );
};
