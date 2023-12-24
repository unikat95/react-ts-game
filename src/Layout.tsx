import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Backpack from "./components/Backpack/Backpack";

export default function Layout() {
  return (
    <div className="w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
      <Container>
        <Navbar />
        <div className="w-full h-full bg-signin-bg bg-center bg-cover flex flex-col justify-start items-center p-2 overflow-hidden">
          <div className="w-full h-auto bg-primary border-[8px] border-tertiary rounded-md p-5 overflow-auto">
            <Outlet />
          </div>
        </div>
        <Backpack />
      </Container>
    </div>
  );
}
