import { MouseEventHandler } from "react";

interface ButtonIconProps {
  title: string;
  svg?: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
  type?: "submit" | "button";
}

export const Button = (props: ButtonIconProps) => {
  const buttonClasses = `w-full inline-block rounded px-4 pb-2 pt-2.5 text-xs font-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]`;

  return (
    <div className="text-xs flex space-x-2 my-auto">
      <button
        type={props.type || "button"}
        onClick={props.onClick}
        className={`${buttonClasses} ${
          props.backgroundColor || "bg-neutral-800"
        }`}
      >
        {props.svg}
        <p className="my-auto text-center dark:text-white">{props.title}</p>
      </button>
    </div>
  );
};
