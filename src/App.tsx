import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { MascotaIndex } from "./pages/Mascotas/Index";
import { ReporteIndex } from "./pages/Reporte/Index";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />}>
          <Route path="mascotas" element={<MascotaIndex />} />
          <Route path="reporte" element={<ReporteIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
