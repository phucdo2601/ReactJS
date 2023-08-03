import React from "react";
import "./SimpleCard.css";
const SimpleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <>
      <div className="card" key={card.id}>
        <div>
          <img className="front" src={card.src} alt="Card front" />
          <img
            className="back"
            src="/img/cover.png"
            alt="Card back"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default SimpleCard;
