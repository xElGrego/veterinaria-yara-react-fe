import { FC, useState } from "react";
import { HiMenuAlt3, HiLogout } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

import { Link } from "react-router-dom";
import React from "react";

export const SideBar: FC = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Usuarios", link: "usuarios", icon: AiOutlineUser },
    { name: "Mascotas", link: "mascotas", icon: FiMessageSquare },
    { name: "Razas", link: "razas", icon: TbReportAnalytics },
  ];

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen flex flex-col justify-between ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="mt-4 flex flex-col gap-4 ">
        <div className="py-3 justify-end ">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="mb-8 flex gap-4 ">
        <div>
          <HiLogout
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <h2
          style={{
            transitionDelay: `300ms`,
          }}
          className={`whitespace-pre duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        >
          Salir
        </h2>
      </div>
    </div>
  );
};
