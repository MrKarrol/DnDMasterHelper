import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, HoardLootGenerator, TreasureLootGenerator } from "./components/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/hoard-loot-generator",
    element: <HoardLootGenerator />,
    errorElement: <ErrorPage />
  },
  {
    path: "/treasure-loot-generator",
    element: <TreasureLootGenerator />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
