import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface IPropsItems {
  title: string;
  name?: string;
}

export const InputText: FC<IPropsItems> = (props) => {
  const { register } = useFormContext();
  return (
    <div className="text-xs">
      <p className="w-full my-auto">{props.title}</p>
      <input
        type="text"
        {...register(props.name!)}
        className="border-gray-300 focus:outline-none left-0 relative  focus:border-blue-500 focus:ring-blue-500 focus:ring-1 ring-0 w-full border rounded-md pl-1 text-xs py-1 space-x-0"
      />
    </div>
  );
};
