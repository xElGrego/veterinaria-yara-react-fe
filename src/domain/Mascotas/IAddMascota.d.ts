export interface IAddMascotaRequest {
    idUsuario: Guid;
    nombreMascota: string;
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