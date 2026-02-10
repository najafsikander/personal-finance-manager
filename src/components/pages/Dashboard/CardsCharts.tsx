//TODO: CREATE A COMPONENT WHICH SHOWS LIST OF CREDIT CARDS

import DoughnutChart from "@/components/charts/Doughnut";
import CardsStack from "./CardsStack";

//TODO: EXCRACT CREDIT CARD CODE INTO ITS OWN COMPONENT
const CardsCharts = () => {
  return (
    <>
      <section className="w-full mt-5 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5">
        <div className="w-full bg-white p-4 pb-6 rounded-lg border border-white/20">
          <h3 className="font-semibold text-xl mb-5">My Cards</h3>
          <CardsStack />
        </div>
        <div className="w-full bg-white p-4 pb-6 rounded-lg border border-white/20">
          <h3 className="font-semibold text-xl mb-5">My Cards</h3>
          <DoughnutChart />
        </div>
      </section>
    </>
  );
};

export default CardsCharts;
