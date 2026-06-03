import { FC } from "react";
import SimpleRoutePill from "../ui/pills/SimpleRoutePill";

type Props = {
  title: string;
  pills: Array<{
    name: string;
    path: string;
  }>;
};

const CategoryOptionsCard: FC<Props> = ({ title, pills }) => {
  return (
    <div className="w-full bg-slate-950 rounded-lg p-0.5">
      <div
        className="
              w-full bg-white rounded-lg p-2
              transition-all duration-200
              hover:-translate-y-1 hover:translate-x-1
            "
      >
        <h1 className="text-xl font-medium text-slate-800 mb-2">{title}</h1>
        <div className="flex flex-row gap-2">
          {pills.map((pill, index) => (
            <SimpleRoutePill key={index} pill={pill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryOptionsCard;
