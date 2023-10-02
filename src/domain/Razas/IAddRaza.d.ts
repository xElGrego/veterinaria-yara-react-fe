export type IAddRazaRequest = {
    idRaza?: Guid;
    nombre: string;
    descripcion: string;
};
export interface IAddRazaResponse {
    response: string
}