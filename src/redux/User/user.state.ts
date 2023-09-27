import { User } from "../../domain/User/User";

const createInitialUserState = (): User => ({
  apellidos: "",
  correo: "",
  nombres: "",
  rol: "",
  token: "",
  empresas: []
});

export interface UserState {
  user: User;
  loading: boolean; empresas: []

}

export const initialState: UserState = {
  user: createInitialUserState(),
  loading: false, empresas: []

};
