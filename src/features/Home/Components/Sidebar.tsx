import { FC, useState } from "react";
import { HiMenuAlt3, HiLogout } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/User/user.slice";
import { useAppSelector } from "../../../store/store";
import {
  nombresSelector,
  rolSelector,
} from "../../../redux/User/user.selector";

export const SideBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nombres = useAppSelector(nombresSelector);
  const rol = useAppSelector(rolSelector);

  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Usuarios", link: "usuarios", icon: AiOutlineUser },
    { name: "Mascotas", link: "mascotas", icon: FiMessageSquare },
    { name: "Razas", link: "razas", icon: TbReportAnalytics },
  ];

  const handlerLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen flex flex-col justify-between ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div>
        <div className="py-2 justify-end ">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <div className="text-center">
            <div className="flex justify-center items-center">
              <img
                src="https://www.shareicon.net/data/512x512/2016/05/26/771187_man_512x512.png"
                alt=""
                className={`w-[40%]  ${!open && "w-[20%]"}`}
              />
            </div>
            <h2
              className={`whitespace-pre duration-500 mt-2 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {nombres}
            </h2>

            <p
              className={`mt-2 whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {rol.map((rol, index) => (
                <div key={index} className="rol">
                  {rol}
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
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
        <div
          className="flex gap-4 w-full cursor-pointer"
          onClick={handlerLogout}
        >
          <HiLogout size={26} className="cursor-pointer" />

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
    </div>
  );
};
