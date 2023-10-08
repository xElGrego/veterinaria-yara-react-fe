import { FC, useState } from "react";
import { RazasProvider } from "./provider";
import { RazasList } from "./Components/RazasList";
import { Drawer } from "antd";
import { Razas } from "./razas";

export const RazasIndex: FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <RazasProvider>
        <section className="mx-2 rounded-lg px-4 py-2 mt-2 w-full">
          <div className="lg:flex md:flex justify-between items-center">
            <h2 className="font-semibold text-2xl dark:text-black">Razas</h2>
          </div>
          <div className=" border-b my-2"></div>
          <div className="my-2 ">
            <button
              type="button"
              onClick={showDrawer}
              className="inline-block rounded bg-neutral-800 px-4 pb-2 pt-2.5 text-xs font-normal   text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
            >
              Ingresar
            </button>
            <Drawer
              title="Agregar raza"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <Razas />
            </Drawer>
            <RazasList />
          </div>
        </section>
      </RazasProvider>
    </>
  );
};
