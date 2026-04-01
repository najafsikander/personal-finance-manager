import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const SubmitButton = ({
  children,
  type = "button",
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "my-2 border-2 border-slate-800 rounded-md px-4 py-2 cursor-pointer bg-slate-800 text-white hover:text-slate-800 hover:bg-transparent transition",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
