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
import { Button } from "../../shared/Components/Buttons/Button";

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
      debugger;
      const params: LoginRequest = { ...getValues() };
      await postLogin(params);
      navigate("/dashboard");
    } catch (error) {
      onError("Hubo un error al iniciar sesiónxd");
      debugger;
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
        <Button type="submit" title="Ingresar" />
      ) : (
        <button
          disabled
          className="w-full inline-block rounded px-4 pb-2 pt-2.5 text-xs font-normal text-black shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
        >
          <Spinner class="w-4 h-4 text-blue-600 dark:text-white" />
          Cargando
        </button>
      )}
    </form>
  );
};
