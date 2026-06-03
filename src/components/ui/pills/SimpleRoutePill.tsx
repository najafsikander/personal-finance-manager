import { useNavigate } from "@tanstack/react-router";
import { FC } from "react";

type Props = {
  pill: {
    name: string;
    path: string;
  };
};
const SimpleRoutePill: FC<Props> = ({ pill: { name, path } }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate({ to: path })}
      className="w-fit text-slate-900 rounded-3xl px-2 py-1 border-2 border-slate-900 hover:cursor-pointer hover:bg-slate-900 hover:text-white"
    >
      {name}
    </div>
  );
};

export default SimpleRoutePill;
