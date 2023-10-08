
export interface User {
  idUsuario: Guid;
  nombres: string;
  apellidos: string;
  correo: string;
  token: string;
  rol: string[];
}
