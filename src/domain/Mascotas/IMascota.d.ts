export interface IMascota {
    idMascota: string;
    idUsuario: string;
    nombre: string;
    mote: string;
    edad: number;
    peso: number;
    idRaza: string;
    fechaIngreso: Date | null;
    fechaModificacion: Date;
    estado: number;
}


export type MascotaRequest = {
    idUsuario?: Guid;
    nombre?: string;
    descripcion?: string;
    estado: number;
    start: number;
    length: number;
    fechaInicio?: string;
    fechaFin?: string;
};
