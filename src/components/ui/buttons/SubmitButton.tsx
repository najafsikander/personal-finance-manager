import { ReactNode } from "react";

const SubmitButton = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button
        type="submit"
        className="my-2 border border-white rounded-md p-2 cursor-pointer text-white hover:bg-white hover:text-slate-700 transition"
      >
        {children}
      </button>
    </>
  );
};

export default SubmitButton;
