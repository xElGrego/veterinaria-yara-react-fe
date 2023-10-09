export interface ItemsPaginationResponse<T> {
  data: T[],
  pagination: Pagination
}

interface Pagination {
  total: number,
  limit: number,
  offset: number,
  returned: number,
}

export interface LoginService {
  Login(req: LoginRequest): Promise<LoginResponse>;
}

export interface UsuariosServices {
  GetUsuarios(req: IUsuariosRequest): Promise<ItemsPaginationResponse<User>>
}

export interface MascotasServices {
  getMascotas(req: MascotasRequest): Promise<ItemsPaginationResponse<IMascota>>
  GetMascotasUsuarios(start: number, length: number, idUsuario: Guid): Promise<IMascota[]>
  postMascota(req: IAddMascotaRequest): Promise<IAddMascotaResponse>
  putMascota(req: IAddMascotaRequest): Promise<IAddMascotaResponse>
  deleteMascota(req: Guid): Promise<string>
  ActivarMascota(req: Guid): Promise<string>
  OrderMascotas(req: IOrderMascota[]): Promise<string>
}

export interface EstadosServices {
  getEstados(): Promise<EstadosResponse[]>
}
export interface RazasServices {
  getListaRazas(): Promise<RazasResponnse[]>
  postRaza(req: IAddRazaRequest): Promise<IAddRazaResponse>
  deleteRaza(req: Guid): Promise<string>
}