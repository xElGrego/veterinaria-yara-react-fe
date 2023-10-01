import { ChangeEvent } from "react";
interface ButtonFileProps {
  title: string;
  id: string;
  svg?: JSX.Element;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  modaid?: string;
  accept: string;
  isMultiple?: boolean;
}
const ButtonFile = (props: ButtonFileProps) => {
  return (
    <label className="w-full ">
      {props.id === "txt" ? (
        <input
          type="file"
          className="hidden"
          accept={props.accept}
          onChange={props.onChange}
          multiple={props.isMultiple}
        />
      ) : (
        <input
          type="file"
          className="hidden w-full"
          onChange={props.onChange}
        />
      )}
      <p
        data-te-ripple-init
        data-te-ripple-color="light"
        className="inline-flex justify-center dark:text-white 
        items-center bg-blue-800  px-1 py-1.5 w-full  border border-gray-300 
        hover:border-blue-600 hover:font-semibold  shadow-md text-sm  rounded-md 
        text-white bg-gray   focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
      >
        {props.svg}
        {props.title}
      </p>
    </label>
  );
};

export default ButtonFile;
