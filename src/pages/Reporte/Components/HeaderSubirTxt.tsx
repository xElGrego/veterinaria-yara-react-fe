import { FC } from "react";
import { convertirBytes } from "../../../shared/helpers/Utilities";

interface Props {
  name?: string;
  razonSocial?: string;
  peso?: number;
}

export const HeaderSubirTxt: FC<Props> = ({ name, razonSocial, peso }) => {
  return (
    <div className="flex text-sm pl-1  my-2">
      <div className=" justify-between my-2 overflow-x-auto mx-2  ">
        Nombre: <span className="font-medium"> {name}</span>
      </div>

      <div className=" justify-between my-2 overflow-x-auto mx-2  ">
        Razón Social: <span className="font-medium"> {razonSocial} </span>
      </div>

      <div className=" justify-between my-2 overflow-x-auto mx-2  ">
        Peso: <span className="font-medium"> {convertirBytes(peso!)} </span>
      </div>
    </div>
  );
};
