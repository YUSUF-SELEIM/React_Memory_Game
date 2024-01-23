import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import axios from "axios";
import Card from "./components/Card.jsx";
import SideBarScore from "./components/SideBarScore.jsx";
import GameOver from "./components/GameOver.jsx";
import arrayShuffle from "array-shuffle";

function App() {
  const [cards, setCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    fetchRandomSpongeBobCharacters();
  }, []);

  const fetchRandomSpongeBobCharacters = async () => {
    try {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "yREcujXvrH2lsYZyjVZKEEttmAvn5kkl",
          q: "SpongeBobSquarePants",
          limit: 9,
        },
      });

      const data = response.data.data.map((gif) => gif.images.downsized.url);
      setCards(data);
    } catch (error) {
      console.error("Error fetching SpongeBob characters:", error);
    }
  };

  const handleClick = (index) => {
    if (!isShuffling) {
      setIsFlipped(true);
      setIsShuffling(true);
      // After 1 second, shuffle the cards
      handleSetClickedCards(index);
      setTimeout(() => {
        setCards(arrayShuffle(cards));
        setIsFlipped(false);
        setIsShuffling(false);
      }, 1000);
    }
  };
  const handleIsGameOver = () => {
    setIsGameOver(!isGameOver);
  };

  const handleMaxScore = () => {
    if (score > maxScore) {
      setMaxScore(score);
    }
  };

  const handleSetClickedCards = (cardId) => {
    if (clickedCards.has(cards[cardId])) {
      console.log("Game Over! You clicked the same card again.");
      setIsGameOver(true);
      setScore(0);
      handleMaxScore();
      setClickedCards(new Set());
    } else {
      setClickedCards((prevClickedCards) =>
        new Set(prevClickedCards).add(cards[cardId])
      );
      setScore(score + 1);
    }
  };
  if (score == 9) {
    setIsGameOver(true);
    setScore(0);
    handleMaxScore();
    setClickedCards(new Set());
  }
  return (
    <div className="flex h-screen">
      {isGameOver && <GameOver handleIsGameOver={handleIsGameOver}></GameOver>}
      <SideBarScore maxScore={maxScore} score={score}></SideBarScore>
      <div className="h-screen w-full flex flex-col items-center justify-center bg">
        {console.log(clickedCards)}
        <div className="w-fit h-full grid grid-cols-3 justify-items-center gap-6 items-center px-28 py-3">
          {cards.map((card, index) => (
            <Tilt key={index}>
              <Card
                key={index}
                content={card}
                isFlipped={isFlipped}
                handleClick={() => handleClick(index)}
              />
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
