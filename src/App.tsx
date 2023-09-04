import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        {/* <Route path="/productos" element={<ProductosIndex />} />
        <Route path="/form-basic" element={<FormBasicPage />} />
        <Route path="/form-avanced" element={<FormBasicPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
