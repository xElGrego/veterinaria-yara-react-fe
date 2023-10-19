export interface IAddUsuarioRequest {
    idUsuario: Guid;
    nombres: string;
    apellidos: string;
    correo: string;
    clave: string;
    rol: string[''];
}

export interface IAddUsuarioResponse {
    response: string
}