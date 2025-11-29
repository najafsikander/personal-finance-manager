//TODO: CREATE A COMPONENT WHICH SHOWS LIST OF CREDIT CARDS

import CardsStack from "./CardsStack";

//TODO: EXCRACT CREDIT CARD CODE INTO ITS OWN COMPONENT
const CardsCharts = () => {
  return (
    <>
      <section className="w-full mt-5 flex gap-5">
        <div className="w-full lg:basis-1/2 xl:basis-1/2 bg-white p-4 rounded-lg border border-white/20">
          <h3 className="font-semibold text-xl mb-5">My Cards</h3>
          <CardsStack />
        </div>
      </section>
    </>
  );
};

export default CardsCharts;
