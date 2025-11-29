import { Wifi } from "lucide-react";
import { FC } from "react";
import { Image } from "@unpic/react";

type Props = {
  color: string;
  name: string;
  number: string;
  expiry: string;
  vendor: string;
  zIndex: number;
  offsetY: number;
};

const PaymentCard: FC<Props> = ({
  color,
  name,
  number,
  expiry,
  vendor,
  zIndex,
  offsetY,
}) => {
  return (
    <div
      className={`absolute rounded-xl w-full pt-5 pl-4 pr-4 pb-4 ${color} transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl cursor-pointer`}
      style={{
        zIndex: zIndex,
        top: `${offsetY}px`,
      }}
    >
      {/* Card's Wifi Icon */}
      <div className="w-full flex justify-end">
        <Wifi size={25} color="white" className="rotate-90" />
      </div>

      {/* EMV Chip */}
      <div className="w-full flex justify-start mt-4">
        {/*<div className="w-12 h-10 bg-gray-300 rounded opacity-80"></div>*/}
        <Image
          src="/assets/images/emv-chip-white.png"
          width={50}
          height={50}
          alt="emv-chip-icon"
          layout="constrained"
          className="mt-4"
        />
      </div>

      <h3 className="text-white ml-2 font-bold mt-4">DEBIT CARD</h3>

      <div className="flex justify-between mt-4">
        <div className="basis-2/3 flex justify-start items-center">
          <span className="text-white text-md font-medium ml-2 mr-2">
            {number}
          </span>
          <span className="text-white text-xs font-medium">{expiry}</span>
        </div>
        <div className="basis-1/3 flex items-center justify-end">
          <div className="w-16 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center">
            <span className="text-xs font-bold">{vendor}</span>
          </div>
        </div>
      </div>

      <div className="text-white text-sm mt-2 ml-2">{name}</div>
    </div>
  );
};

export default PaymentCard;
