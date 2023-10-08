export type IUsuariosRequest = {
    nombre?: string;
    estado: number;
    start: number;
    length: number;
    fechaInicio?: string;
    fechaFin?: string;
};