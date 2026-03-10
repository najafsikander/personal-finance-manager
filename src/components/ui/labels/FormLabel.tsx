import { FC } from "react";

type Props = {
  labelName?: string;
  isRequired?: boolean;
  children: React.ReactNode;
};

const FormLabel: FC<Props> = ({ labelName, isRequired = false, children }) => {
  return (
    <>
      <label
        htmlFor={labelName}
        className="text-md text-slate-800 font-semibold mb-2.5"
      >
        {children}
        {isRequired && <span className="text-red-500 ml-0.5">*</span>}
      </label>
    </>
  );
};

export default FormLabel;
