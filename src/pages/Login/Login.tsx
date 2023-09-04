import { FC } from "react";

import imagen from "../../assets/img/mascotas.jpg";
import { LoginRequest } from "../../domain/Login/Login";
import { FormProvider, useForm } from "react-hook-form";
import { LoginForm } from "./LoginForm";

export const Login: FC = () => {
  const loginForm: LoginRequest = {
    correo: "",
    clave: "",
  };

  const methods = useForm<LoginRequest>({
    defaultValues: loginForm,
  });

  return (
    <FormProvider {...methods}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col  m-6 space-y-8 bg-white shadow-2xl rounded-xl md:flex-row md:space-y-0 sm:h-[500px] lg:h-[600px] ">
          <div className="flex flex-col justify-center p-8 md:p-14 ">
            <span className="mb-3 text-4xl font-bold">Bienvenido!</span>
            <span className="font-light text-gray-400">
              Bievenido a veterinaria yara!!
            </span>
            <LoginForm />
          </div>
          <div className="relative">
            <img
              src={imagen}
              alt="img"
              className="w-[300px] h-full hidden rounded-r 2xl md:block object-cover items-end"
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
