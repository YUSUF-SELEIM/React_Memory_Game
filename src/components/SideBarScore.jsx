/* eslint-disable react/prop-types */

export default function SideBarScore({ maxScore, score }) {
  return (
    <div className="absolute right-0 w-[25%] px-10 py-10 flex flex-col items-center bg-cyan-300 border-2 border-orange-700 rounded-l-full shadow-2xl">
      <div className=" text-xl font-Rubik  font-bold flex flex-col space-y-4 items-center justify-start">
        <div className="tracking-widest bg-orange-600 px-4 py-2 rounded-full shadow-2xl">
          Max Score : {maxScore}
        </div>
        <div className="tracking-widest bg-orange-600 px-4 py-2 rounded-full shadow-lg">
          Score: {score}
        </div>
      </div>
    </div>
  );
}
