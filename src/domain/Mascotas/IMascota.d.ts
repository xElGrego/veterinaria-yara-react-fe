export interface IMascota {
    idMascota: Guid;
    idUsuario: string;
    nombre: string;
    mote: string;
    edad: number;
    peso: number;
    idRaza: string;
    fechaIngreso: Date | null;
    fechaModificacion: Date;
    estado: number;
    orden: number;
}

export type MascotaRequest = {
    idUsuario?: Guid;
    nombre?: string;
    estado: number;
    start: number;
    length: number;
    fechaInicio?: string;
    fechaFin?: string;
};
