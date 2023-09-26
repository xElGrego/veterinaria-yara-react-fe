export interface IAddMascotaRequest {
    //idUsuario: Guid;
    idRaza?: Guid;
    nombre: string;
    mote?: string;
    edad: number;
    peso: number;

}

export interface IAddMascotaResponse {
    idMascota?: Guid;
    idUsuario: Guid;
    idRaza?: Guid;
    nombre: string;
    mote?: string;
    edad: number;
    peso: number;
}