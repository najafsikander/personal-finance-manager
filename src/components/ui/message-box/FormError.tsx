import { FC } from "react";

type Props = {
  isFieldValid: boolean;
  errors: any[];
};
const FormError: FC<Props> = ({ isFieldValid, errors }) => {
  return (
    <>
      {!isFieldValid && (
        <div className="text-red-500 text-sm">
          {errors.map((error, index) => (
            <p key={index}>{error?.message}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default FormError;
