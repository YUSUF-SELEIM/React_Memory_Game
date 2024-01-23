/* eslint-disable react/prop-types */

export default function GameOver({ handleIsGameOver }) {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-yellow-400 z-10 ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-9xl font-bold">GameOver</div>
        <button
          className=" w-1/2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={handleIsGameOver}
        >
          Play Again!
        </button>
      </div>
    </div>
  );
}
