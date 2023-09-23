import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsItems<T extends FieldValues> {
  label: string;
  name: string;
  error?: string;
  register?: UseFormRegister<T>;
}

export const InputText: FC<IPropsItems<any>> = (props) => {
  return (
    <div>
      <label className="mb-2 text-md">{props.label}</label>
      <input
        type="text"
        {...props.register!(props.name)}
        className={`border-gray-300 focus:outline-none left-0 relative focus:border-blue-500 focus:ring-blue-500 focus:ring-1 ring-0 w-full border rounded-md pl-1 text-xs py-1 space-x-0 ${
          props.error ? "border-red-500" : ""
        }`}
      />
      {props.error && <p className="text-red-600 text-xs">{props.error}</p>}
    </div>
  );
};
