import { RazasResponse } from "../Razas/Razas";

export interface User {
  nombres: string;
  apellidos: string;
  correo: string;
  token: string;
  rol: string;
  razas: RazasResponse[],
}
