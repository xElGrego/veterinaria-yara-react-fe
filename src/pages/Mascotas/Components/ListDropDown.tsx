import { Transition } from "@headlessui/react";
import useComponenModal from "../hooks/useModal";
import { IMascota } from "../../../domain/Mascotas/IMascota";
import { FC } from "react";

interface DropDownMascotaProps {
  field: IMascota;
}

export const DropDownMascota: FC<DropDownMascotaProps> = ({ field }) => {
  const { handleOptionSelect, toggleDropdown, dropdownRef, isOpen, setIsOpen } =
    useComponenModal();

  const handlerEditar = () => {
    console.log("Editar");
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="flex justify-center items-center z-[50] "
        ref={dropdownRef}
      >
        <div className=" relative z-[50] inline-block text-left    items-center justify-center  ">
          <button
            onClick={toggleDropdown}
            className="inline-flex w-full -z-50 justify-center gap-x-1.5 rounded-md bg-white p-2 className= font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-200 z-[50]"
            enterFrom="opacity-0 scale-95 z-[50]"
            enterTo="opacity-100 scale-100 z-[50]"
            leave="transition ease-in duration-150 z-[50]"
            leaveFrom="opacity-100 scale-100 z-[50]"
            leaveTo="opacity-0 scale-95 z-[50]"
          >
            <ul className="absolute z-[50] -top-24  space-y-2   flex-col p-1  cursor-pointer text-black right-12  mt-2 w-44 transition-colors duration-200 rounded-md bg-gray-50  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <li
                className="flex items-center gap-x-1 my-2  mx-2 z-[50] lg:hidden hover:bg-gray-500 "
                onClick={handleOptionSelect}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                Detalle
              </li>
              <li className="">
                <button
                  className="flex items-center gap-x-1 my-2  mx-2 "
                  onClick={handlerEditar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  Editar
                </button>
              </li>
              <li className="">
                <div className="flex items-center gap-x-1 my-2  mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                  Eliminar
                </div>
              </li>
            </ul>
          </Transition>
        </div>
      </div>
    </>
  );
};
