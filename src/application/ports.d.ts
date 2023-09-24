export interface LoginService {
  Login(req: LoginRequest): Promise<LoginResponse>;
}

export interface MascotasServices {
  getMascotas(req: MascotasRequest): Promise<Pagination<MascotasResponse>>
}

export interface EstadosServices {
  getEstados(): Promise<EstadosResponse[]>
}