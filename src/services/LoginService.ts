import { LoginService } from "../application/ports";
import LoginClient from "./configurationt";

import { LoginRequest, LoginResponse } from "../domain/Login/Login";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/User/user.slice";

const useLoginService = (): LoginService => {
  const dispatch = useDispatch();

  const Login = async (req: LoginRequest): Promise<LoginResponse> => {
    const res = await LoginClient.post(`veterinaria-yara/login`, { ...req });
    dispatch(saveUser({ ...res.data.data }));
    return {
      ...res.data.data,
    };
  };

  return {
    Login,
  };
};

export default useLoginService;
