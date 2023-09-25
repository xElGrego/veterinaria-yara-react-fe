import { FC, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputDateProps<T extends FieldValues> {
  title: string;
  name: string;
  order?: string;
  register?: UseFormRegister<T>;
}

export const InputDate: FC<InputDateProps<any>> = (props) => {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    return new Date().toISOString().slice(0, 10);
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <label className="mb-2 text-md">{props.title}</label>
      <input
        type="date"
        {...props.register!(props.name)}
        value={selectedDate}
        onChange={handleDateChange}
        className="border-gray-300 uppercase   focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 ring-0 w-full border rounded-md pl-1 text-xs py-1"
      />
    </div>
  );
};
