import { User } from "../../domain/User/User";

const createInitialUserState = (): User => ({
  apellidos: "",
  correo: "",
  nombres: "",
  rol: "",
  token: "",
  razas: []
});

export interface UserState {
  user: User;
  loading: boolean;
  razas: []
}

export const initialState: UserState = {
  user: createInitialUserState(),
  loading: false,
  razas: []
};
