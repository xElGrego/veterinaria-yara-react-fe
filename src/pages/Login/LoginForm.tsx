import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { LoginRequest } from "../../domain/Login/Login";
import usePostLogin from "../../application/Login/postLogin";
import { useToastify } from "../../hooks/Toastify";
import { useNavigate } from "react-router-dom";

export const LoginForm: FC = () => {
  const { onError } = useToastify();
  const { register, getValues } = useFormContext<LoginRequest>();
  const { postLogin } = usePostLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const params: LoginRequest = { ...getValues() };
      await postLogin(params);
      navigate("/dashboard");
    } catch (error) {
      onError("Hubo un error al iniciar session");
    }
  };

  return (
    <div>
      <form>
        <div className="py-4">
          <span className="mb-2 text-md">Correo</span>
          <input {...register("correo")} className="input-general" />
          <div className="py-4">
            <span className="mb-2 text-md">Contraseña</span>
            <input {...register("clave")} className="input-general" />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};
