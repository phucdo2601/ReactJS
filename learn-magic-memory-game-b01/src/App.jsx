import { useState } from "react";
import "./App.css";
import SimpleCard from "./components/SimpleCard";
import { useEffect } from "react";

const cardImages = [
  {
    src: "/img/helmet-1.png",
  },
  {
    src: "/img/potion-1.png",
  },
  {
    src: "/img/ring-1.png",
  },
  {
    src: "/img/scroll-1.png",
  },
  {
    src: "/img/shield-1.png",
  },
  {
    src: "/img/sword-1.png",
  },
];

function App() {
  const [cards, setCards] = useState([]);

  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  //handle choice
  const handleChoice = (card) => {
    // console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    console.log(choiceOne);
    console.log(choiceTwo);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("those card matches");
        resetTurn();
      } else {
        console.log("those card not matches");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices && increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <>
            <SimpleCard card={card} handleChoice={handleChoice} />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
