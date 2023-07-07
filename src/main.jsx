import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Postagem from "./pages/postagem/postagem";
import Finish from "./pages/finish/finish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Postagem />,
  },
  {
    path: "/Finish",
    element: <Finish />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
