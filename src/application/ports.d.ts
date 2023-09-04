export interface LoginService {
  Login(req: LoginRequest): Promise<LoginResponse>;
}
