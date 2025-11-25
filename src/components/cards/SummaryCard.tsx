import { FC } from "react";

type Props = {
  header: string;
  amount: string;
  percentage: string;
  subtext: string;
  bgColor: string;
};

const SummaryCard: FC<Props> = ({
  header,
  amount,
  percentage,
  subtext,
  bgColor,
}) => {
  return (
    <>
      {/* Outer Card */}
      <div className={`pt-3 rounded-xl ${bgColor}`}>
        {/* Inner Card */}
        <div className="p-4 bg-white rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            {header}
          </h2>

          {/* Amount + Percentage */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-black">{amount}</span>
            <span className="text-sm font-medium text-green-900 bg-green-500/80 px-3 py-0.5 rounded-md">
              {percentage}
            </span>
          </div>

          <p className="text-gray-500 font-light text-sm mt-2">
            {subtext}
          </p>
        </div>
      </div>
    </>
  );
};

export default SummaryCard;
