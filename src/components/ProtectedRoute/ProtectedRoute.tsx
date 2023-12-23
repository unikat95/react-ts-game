import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { char } = useContext(GameContext) || {};

  return char ? children : <Navigate to="/signin"></Navigate>;
}
