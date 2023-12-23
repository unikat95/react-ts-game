import React from "react";

export default function Backpack() {
  return (
    <div className="w-full h-auto bg-primary flex justify-center items-center p-2">
      <ul className="w-full h-full flex justify-between items-center gap-2">
        <li className="w-full h-full bg-secondary flex justify-center items-center text-link py-3 rounded-md">
          Gold
        </li>
        <li className="w-full h-full bg-secondary flex justify-center items-center text-link py-3 rounded-md">
          Stone
        </li>
        <li className="w-full h-full bg-secondary flex justify-center items-center text-link py-3 rounded-md">
          Wood
        </li>
      </ul>
    </div>
  );
}
