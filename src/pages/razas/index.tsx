import { FC, useState } from "react";
import { RazasProvider } from "./RazasProvider";
import { RazasList } from "./Components/RazasList";
import { Drawer } from "antd";
import { Razas } from "./Razas";

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
              className="bg-red-200 p-2 rounded-md"
              type="button"
              onClick={showDrawer}
            >
              Agregar raza
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
