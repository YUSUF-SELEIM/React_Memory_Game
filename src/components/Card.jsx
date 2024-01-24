/* eslint-disable react/prop-types */

import "../index.css";
import ReactCardFlip from "react-card-flip";

export default function Card({ content, isFlipped, handleClick }) {
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          className="h-[161.500px] md:w-28 w-20 border border-black shadow-lg"
          onClick={handleClick}
        >
          <img
            src={content}
            alt="SpongeBob Character"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="h-[161.500px] w-[114px] border border-black shadow-lg"
          onClick={handleClick}
        >
          <img
            src={"./src/assets/back-flip.png"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </ReactCardFlip>
    </>
  );
}
