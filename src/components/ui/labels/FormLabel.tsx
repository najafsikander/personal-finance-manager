import clsx from "clsx";
import { FC } from "react";

type Props = {
  size?: "sm" | "lg";
  labelName?: string;
  isRequired?: boolean;
  children: React.ReactNode;
};

const FormLabel: FC<Props> = ({
  size = "sm",
  labelName,
  isRequired = false,
  children,
}) => {
  const labelClass = clsx(" text-slate-800 ", {
    "font-normal text-sm mb-1.5": size == "sm",
    "font-semibold text-md mb-2.5": size == "lg",
  });

  return (
    <>
      <label htmlFor={labelName} className={labelClass}>
        {children}
        {isRequired && <span className="text-red-500 ml-0.5">*</span>}
      </label>
    </>
  );
};

export default FormLabel;
