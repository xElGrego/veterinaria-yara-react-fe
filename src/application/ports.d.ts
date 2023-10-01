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

export interface MascotasServices {
  getMascotas(req: MascotasRequest): Promise<ItemsPaginationResponse<MascotasResponse>>
  postMascota(req: IAddMascotaRequest): Promise<IAddMascotaResponse>
  putMascota(req: IAddMascotaRequest): Promise<IAddMascotaResponse>
  deleteMascota(req: Guid): Promise<string>
}

export interface EstadosServices {
  getEstados(): Promise<EstadosResponse[]>
}
export interface RazasServices {
  getListaRazas(): Promise<RazasResponnse[]>
}