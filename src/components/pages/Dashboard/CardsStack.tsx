import PaymentCard from "@/components/cards/PaymentCard";

const CardsStack = () => {
  const cards = [
    {
      color: "bg-purple-600",
      name: "Ethan Cole",
      number: "****1234",
      expiry: "12/24",
      vendor: "VISA",
      id: 1,
    },
    {
      color: "bg-blue-500",
      name: "Ethan Cole",
      number: "****5678",
      expiry: "03/25",
      vendor: "MC",
      id: 2,
    },
    {
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
      name: "Ethan Cole",
      number: "****9012",
      expiry: "06/26",
      vendor: "AMEX",
      id: 3,
    },
  ];

  const cardHeight = 220;
  const cardOffset = 40;

  return (
    <div>
      <div className="max-w-md mx-auto">
        {/* Cards Container */}
        <div
          className="relative mb-8"
          style={{
            height: `${cardHeight + (cards.length - 1) * cardOffset}px`,
          }}
        >
          {cards.map((card, index) => (
            <PaymentCard
              key={card.id}
              color={card.color}
              name={card.name}
              number={card.number}
              expiry={card.expiry}
              vendor={card.vendor}
              zIndex={cards.length - index}
              offsetY={index * cardOffset}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsStack;
