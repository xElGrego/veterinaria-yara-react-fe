import { FC } from "react";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";
interface InputDateProps<T extends FieldValues> {
  title: string;
  name?: string;
  order?: string;
  register?: UseFormRegister<T>;
}

export const InputDate: FC<InputDateProps<any>> = (props) => {
  if (props.name === undefined) return <></>;

  return (
    <div
      className={`text-sm  ${
        props.order === "true" ? "lg:flex w-full lg:space-x-2" : ""
      } `}
    >
      <label
        htmlFor={props.name}
        className={`w-24 my-auto  text-right dark:text-white `}
      >
        {props.title || props.name}
      </label>
      <input
        type="date"
        {...props.register!(props.name)}
        className="border-gray-300 uppercase   focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 ring-0 w-full border rounded-md pl-1 text-xs py-2 "
      />
    </div>
  );
};
