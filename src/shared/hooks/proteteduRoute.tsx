import { Navigate } from "react-router-dom";
import { rolSelector } from "../../redux/User/user.selector";
import { useAppSelector } from "../../store/store";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const rol = useAppSelector(rolSelector);
  const isSuperAdmin = rol.includes("SuperAdministrador");
  return isSuperAdmin ? (
    children
  ) : (
    <Navigate to="/dashboard/unauthorized" replace />
  );
};
