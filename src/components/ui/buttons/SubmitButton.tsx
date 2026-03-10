import { ReactNode } from "react";

const SubmitButton = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button
        type="submit"
        className="my-2 border border-slate-800 rounded-md p-2 cursor-pointer text-slate-800 hover:bg-slate-800 hover:text-white transition"
      >
        {children}
      </button>
    </>
  );
};

export default SubmitButton;
