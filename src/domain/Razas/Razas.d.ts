
export interface IRaza {
    razas: RazasResponse[],
    razaSelected: RazasResponse | undefined
}

export type RazasResponse = {
    idRaza: Guid;
    nombre: string;
    descripcion: string;
    fechaIngreso: Date | null;
};
