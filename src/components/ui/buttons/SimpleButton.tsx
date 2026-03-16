import { ReactNode } from "react";

const SimpleButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="my-2 border-2 border-slate-800 rounded-md p-2 cursor-pointer bg-slate-800 text-white hover:text-slate-800 hover:bg-transparent transition"
      >
        {children}
      </button>
    </>
  );
};

export default SimpleButton;
