import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Upgrader from "./pages/Upgrader";
import Forest from "./pages/Forest";
import Signin from "./pages/Signin";
import GameProvider from "./context/GameContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upgrader"
          element={
            <ProtectedRoute>
              <Upgrader />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forest"
          element={
            <ProtectedRoute>
              <Forest />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
      </Route>
    )
  );

  return (
    <>
      <GameProvider>
        <RouterProvider router={router}></RouterProvider>
      </GameProvider>
    </>
  );
}

export default App;
