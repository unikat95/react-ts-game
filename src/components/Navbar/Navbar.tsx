import React from "react";
import { NavLink } from "react-router-dom";
import { Links } from "../../data/Links";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-auto bg-primary flex justify-center items-center p-2">
        <ul className="w-full h-full bg-secondary flex justify-between items-center rounded-md text-link overflow-hidden">
          {Links.map((link) => (
            <li className="w-full" key={link.id}>
              <NavLink
                to={link.href}
                className="w-full flex flex-col justify-center items-center text-[8px] font-black uppercase pt-3 pb-2"
              >
                <img src={link.icon} alt="" className="w-6 h-6" />
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
