import { FC } from "react";
import { FaUser, FaWallet } from "react-icons/fa"; // Importar los iconos necesarios

export const Home: FC = () => {
  return (
    <section className="mx-2 px-4 py-2 w-full h-screen flex flex-col items-center justify-start">
      <div className="flex flex-col justify-center text-center mb-2 absolute sm:mt-0">
        <div className="mt-8">
          <span className="mb-1 text-4xl font-bold">Suscripciones</span>
        </div>
        <span className="font-light text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </span>
      </div>
      <div className="flex items-center justify-center h-full flex-wrap sm:flex-nowrap">
        <div className="flex-1 sm:justify-center sm:align-middle  pr-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            nobis non quos sed atque quas magnam ipsum accusantium quisquam qui
            fugiat eveniet, unde ducimus magni ex sunt doloremque veritatis
            cumque aut, illo molestias aliquam libero esse! Delectus harum
            aliquid ad, nostrum iste totam accusamus maxime ex odit quos
            architecto provident?
          </p>

          <div className="mt-5 flex items-center gap-8">
            <div className="bg-neutral-800 w-full cursor-pointer rounded-lg flex py-5 px-6 items-center">
              <FaUser size={16} className="text-yellow-500" />
              <p className="ml-3 text-white text-lg">Clientes</p>
              <p className="ml-auto font-bold text-white">150</p>
            </div>

            <div className="bg-neutral-800 w-full cursor-pointer rounded-lg flex py-5 px-6 items-center">
              <FaWallet size={16} className="text-yellow-500" />
              <p className="ml-3 text-white text-lg">Suscripciones</p>
              <p className="ml-auto font-bold text-white">1500</p>
            </div>
          </div>
        </div>
        <div className="flex-2">
          <div className="h-full flex items-center justify-center">
            <img
              src="https://tecnosoluciones.com/wp-content/uploads/2023/08/membresias-vs-suscripciones.png"
              alt=""
              className="rounded-lg w-full sm:w-3/4 h-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
