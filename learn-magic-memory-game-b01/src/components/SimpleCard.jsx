import React from "react";
import "./SimpleCard.css";
const SimpleCard = ({ card }) => {
  return (
    <>
      <div className="card" key={card.id}>
        <div>
          <img className="front" src={card.src} alt="Card front" />
          <img className="back" src="/img/cover.png" alt="Card back" />
        </div>
      </div>
    </>
  );
};

export default SimpleCard;
