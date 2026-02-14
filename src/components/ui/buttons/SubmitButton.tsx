import { ReactNode } from "react";

const SubmitButton = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button type="submit">{children}</button>
    </>
  );
};

export default SubmitButton;
