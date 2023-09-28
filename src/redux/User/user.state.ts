import { User } from "../../domain/User/User";

const createInitialUserState = (): User => ({
  apellidos: "",
  correo: "",
  nombres: "",
  rol: "",
  token: "",
});

export interface UserState {
  user: User;
  loading: boolean;
}

export const initialState: UserState = {
  user: createInitialUserState(),
  loading: false,
};
