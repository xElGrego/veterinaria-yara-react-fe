import { FC } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { LoginRequest } from "../../domain/Login/Login";
import usePostLogin from "../../application/Login/postLogin";
import { useToastify } from "../../hooks/Toastify";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const LoginForm: FC = () => {
  const { postLogin } = usePostLogin();
  const { onError } = useToastify();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    correo: yup
      .string()
      .email("Ingresa un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
    clave: yup.string().required("La contraseña es obligatoria"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
  });

  const handleLogin = async () => {
    try {
      const params: LoginRequest = { ...getValues() };
      await postLogin(params);
      navigate("/dashboard");
    } catch (error) {
      onError("Hubo un error al iniciar sesion");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="py-4">
        <span className="mb-2 text-md">Correo</span>
        <input {...register("correo")} className="input-general" />
        {<p className="text-red-600">{errors.correo?.message}</p>}
        <div className="py-4">
          <span className="mb-2 text-md">Contraseña</span>
          <input {...register("clave")} className="input-general" />
          {<p className="text-red-600">{errors.clave?.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};
