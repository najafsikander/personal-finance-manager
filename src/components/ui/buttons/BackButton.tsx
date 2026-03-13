import { useRouter } from "@tanstack/react-router";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.history.back();
  };
  return (
    <button
      onClick={handleBack}
      className="border border-white rounded-md py-2 px-4 bg-transparent text-white hover:bg-white hover:cursor-pointer hover:text-slate-800 transition-colors duration-10"
    >
      BACK
    </button>
  );
};

export default BackButton;
