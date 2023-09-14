import { FC } from "react";
import { MascotaProvider } from "./MascotasProvider";
import { Mascotas } from "./Mascotas";

export const MascotaIndex: FC = () => {
  return (
    <>
      <MascotaProvider>
        <section className="mx-2 rounded-lg px-4 py-2 mt-2 w-full">
          <div className="lg:flex md:flex justify-between items-center">
            <h2 className="font-semibold text-2xl dark:text-black">Mascotas</h2>
          </div>
          <div className=" border-b my-2"></div>
          <div className="my-2 ">
            <Mascotas />
          </div>
        </section>
      </MascotaProvider>
    </>
  );
};
