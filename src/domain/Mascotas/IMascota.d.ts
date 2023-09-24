export interface IMascota {
    Nombre: string;
    Mote: string;
    Edad: number;
    Peso: number;
    Raza: string;
    Estado: bool
}


export type MascotaRequest = {
    nombre?: string;
    descripcion?: string;
    estado: number;
    start?: number;
    length?: number;
};
