import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./features/Login/Login";
import { Layout } from "./features/Home/Home";
import { RazasIndex } from "./features/Razas";
import { MascotaIndex } from "./features/Mascotas";
import { UsuarioIndex } from "./features/Usuarios";
import { UsuariosMascotasIndex } from "./features/Usuarios/pages/UsuariosMascotas";
import { ConfiguracionesIndex } from "./features/configuraciones";
import { ProtectedRoute } from "./shared/hooks/proteteduRoute";
import { UnauthorizedPage } from "./shared/pages/Unauthorized";
import { Home } from "./features/Home/Home2";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="mascotas" element={<MascotaIndex />} />
          <Route path="razas" element={<RazasIndex />} />
          <Route path="usuarios" element={<UsuarioIndex />} />
          <Route
            path="configuraciones"
            element={
              <ProtectedRoute>
                <ConfiguracionesIndex />
              </ProtectedRoute>
            }
          />
          <Route
            path="usuarios/mascotas/:id"
            element={<UsuariosMascotasIndex />}
          />
          <Route path="unauthorized" element={<UnauthorizedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
