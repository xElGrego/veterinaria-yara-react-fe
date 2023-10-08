import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./features/Login/Login";
import { Home } from "./features/Home/Home";
import { RazasIndex } from "./features/Razas";
import { MascotaIndex } from "./features/Mascotas";
import { UsuarioIndex } from "./features/Usuarios";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />}>
          <Route path="mascotas" element={<MascotaIndex />} />
          <Route path="razas" element={<RazasIndex />} />
          <Route path="usuarios" element={<UsuarioIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
