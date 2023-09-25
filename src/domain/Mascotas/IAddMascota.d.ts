export interface IAddMascotaRequest {
    idMascota?: Guid;
    idUsuario: Guid;
    nombre: string;
    mote?: string;
    edad: number;
    peso: number;
    idRaza: Guid;
}

export interface IAddMascotaResponse {
    idMascota?: Guid;
    idUsuario: Guid;
    nombre: string;
    mote?: string;
    edad: number;
    peso: number;
    idRaza: Guid;
}