import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Backpack from "./components/Backpack/Backpack";

export default function Layout() {
  return (
    <Container>
      <Navbar />
      <div className="w-full h-full flex flex-col justify-start items-center">
        <Outlet />
      </div>
      <Backpack />
    </Container>
  );
}
