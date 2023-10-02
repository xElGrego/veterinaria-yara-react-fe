export interface IAddMascotaRequest {
    idUsuario?: Guid;
    idMascota?: Guid;
    idRaza?: Guid;
    nombre: string;
    mote?: string;
    edad: number;
    peso: number;
}

export interface IAddMascotaResponse {
    response: string
}