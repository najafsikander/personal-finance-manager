import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  readonly?: boolean;
};

const SubmitButton = ({
  children,
  type = "button",
  className,
  readonly = false,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      disabled={readonly}
      type={type}
      className={clsx(
        "my-2 border-2 border-slate-800 rounded-md px-4 py-2 bg-slate-800 text-white hover:text-slate-800 hover:bg-transparent transition",
        {
          "cursor-not-allowed": readonly,
          "cursor-pointer": !readonly,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
