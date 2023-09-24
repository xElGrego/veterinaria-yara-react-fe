import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export class InputSelectOptions {
  value?: number;
  title?: string;
}

interface PropsInputSelect<T extends FieldValues> {
  title?: string;
  options?: InputSelectOptions[];
  name?: string;
  validations?: any;
  order?: string;
  onSelectChange?: (selectedValue: string) => void;
  register?: UseFormRegister<T>;
}

const InputSelect = (props: PropsInputSelect<any>) => {
  if (props.name === undefined) return <></>;

  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    props.options?.[0]?.title || "Todos"
  );

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (props.onSelectChange) {
      props.onSelectChange(selectedValue);
    }
  };

  return (
    <div
      className={`text-sm   ${
        props.order === "true" ? " lg:flex lg:space-x-3" : " "
      }    my-auto w-auto `}
    >
      <label
        htmlFor={props.name}
        className="w-44 my-auto text-right dark:text-black "
      >
        {props.title || props.name}
      </label>
      <select
        className="border-gray-300 uppercase  my-auto focus:outline-none
         focus:border-blue-500 focus:ring-blue-500 focus:ring-1 ring-0 
         w-full border rounded-md pl-1 text-xs py-1 "
        {...props.register!(props.name)}
        onChange={handleSelectChange}
        value={selectedOption}
      >
        {props.options &&
          props.options.map((el, key) => {
            return (
              <option key={key} value={el.value}>
                {el.title}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default InputSelect;
