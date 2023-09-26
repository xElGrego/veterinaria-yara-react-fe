import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginRequest } from "../../domain/Login/Login";
import usePostLogin from "../../application/Login/postLogin";
import { useToastify } from "../../hooks/Toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputText } from "../../shared/Components/InputText";
import { Spinner } from "../../shared/Components/Spinner";

export const LoginForm: FC = () => {
  const { postLogin } = usePostLogin();
  const { onError } = useToastify();
  const navigate = useNavigate();

  const [IsLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    correo: yup
      .string()
      .email("Ingresa un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
    clave: yup.string().required("La contraseña es obligatoria"),
  });

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
  });

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const params: LoginRequest = { ...getValues() };
      await postLogin(params);
      navigate("/dashboard");
    } catch (error) {
      onError("Hubo un error al iniciar sesión");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="py-4">
      <div className="mb-6">
        <InputText
          label="Correo"
          name="correo"
          error={errors.correo?.message}
          register={register}
        />
        <InputText
          label="Clave"
          name="clave"
          error={errors.clave?.message}
          register={register}
        />
      </div>

      {!IsLoading ? (
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          Ingresar
        </button>
      ) : (
        <button
          disabled
          className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          <Spinner class="w-4 h-4 text-blue-600 dark:text-white" />
          Cargando
        </button>
      )}
    </form>
  );
};
