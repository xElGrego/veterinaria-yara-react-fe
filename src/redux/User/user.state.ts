import { User } from "../../domain/User/User";

const createInitialUserState = (): User => ({
  idUsuario: "",
  apellidos: "",
  correo: "",
  nombres: "",
  rol: [],
  token: "",
});

export interface UserState {
  user: User | null;
  loading: boolean;
  usuarios: User[]
}

export const initialState: UserState = {
  user: createInitialUserState(),
  loading: false,
  usuarios: []
};
