import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function Backpack() {
  const { currentChar } = useContext(GameContext) || {};
  return (
    <div className="w-full h-auto bg-primary flex justify-center items-center p-2">
      <ul className="w-full h-full flex justify-between items-center gap-2 font-roboto font-bold">
        {currentChar?.backpack?.map((item) => (
          <li
            key={item.name}
            className="w-full h-full bg-secondary flex flex-col justify-center items-center gap-1 text-link py-2 rounded-md "
          >
            <img src={item.icon} alt="" className="w-4" />
            <p
              className={`text-[.65rem] ${
                item.quantity >= item.cap && "text-red-400"
              }`}
            >
              {item.quantity}/{item.cap}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
