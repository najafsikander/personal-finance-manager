import PaymentCard from "@/components/cards/PaymentCard";
import { PaymentCardsData } from "@/data/payment-cards";
import { FC, useState } from "react";

type Props = {
  cardsData: typeof PaymentCardsData;
};

const CardsStack: FC<Props> = ({ cardsData }) => {
  const [cards, setCards] = useState(cardsData);

  const cardHeight = 220;
  const cardOffset = 40;

  const moveCardToFront = (index: number) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(index, 1);
    updatedCards.unshift(movedCard);
    // Update the state with the new order of cards
    setCards(updatedCards);
  };

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
              onClick={() => moveCardToFront(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsStack;
