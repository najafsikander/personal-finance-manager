import { Wifi } from "lucide-react";
import { Image } from "@unpic/react";

//TODO: CREATE A COMPONENT WHICH SHOWS LIST OF CREDIT CARDS
//TODO: EXCRACT CREDIT CARD CODE INTO ITS OWN COMPONENT
const CardsCharts = () => {
  const cardVendor: string = "VISA";
  return (
    <>
      <section className="w-full mt-5 flex gap-5">
        <div className="w-full lg:basis-1/2 xl:basis-1/2 bg-white p-4 rounded-lg border border-white/20">
          <h3 className="font-semibold text-xl mb-5">My Cards</h3>
          {/* Credit Card */}
          <div className="md:flex md:justify-center">
            <div className="rounded-xl sm:w-2/3 md:w-1/2 lg:w-2/2 xl:w-1/2 pt-5 pl-4 pr-2 bg-purple-500">
              {/* Card's Wifi Icon */}
              <div className="w-full flex justify-end">
                <Wifi size={25} color="white" className="rotate-90" />
              </div>
              <div className="w-full flex justify-start">
                <Image
                  src="/assets/images/emv-chip-white.png"
                  width={50}
                  height={50}
                  alt="emv-chip-icon"
                  layout="constrained"
                  className="mt-4"
                />
              </div>
              <h3 className="text-white ml-2 font-bold">DEBIT CARD</h3>
              <div className="flex justify-between">
                <div className="basis-2/3 flex justify-start items-center">
                  <span className="text-white text-md font-medium ml-2 mr-2">
                    **1234
                  </span>
                  <span className="text-white text-xs font-medium">12/24</span>
                </div>
                <div className="basis-1/3 flex items-center justify-end">
                  <Image
                    src={
                      cardVendor === "VISA"
                        ? "/assets/images/visa-logo.png"
                        : "/assets/images/mc-logo.png"
                    }
                    width={80}
                    height={40}
                    alt={cardVendor}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsCharts;
