import { LoginRequest, LoginResponse } from "../../domain/Login/Login";
import useLoginService from "../../services/LoginService";

const usePostLogin = () => {
  const { Login } = useLoginService();

  const postLogin = async (req: LoginRequest): Promise<LoginResponse> => {
    const res = await Login(req);
    return res;
  };

  return {
    postLogin,
  };
};

export default usePostLogin;
