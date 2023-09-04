export type LoginRequest = {
  correo: string;
  clave: string;
};

export type LoginResponse = {
  nombres: string;
  apellidos: string;
  correo: string;
  token: string;
  rol: string;
};
