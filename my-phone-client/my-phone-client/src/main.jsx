import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Phones from "./Components/Phones.jsx";
import Main from "./Components/Main.jsx";
import SinglePhone from "./Components/SinglePhone.jsx";
import Loading from "./Components/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch("http://localhost:5000/phones"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/phone/:id",
        element: <SinglePhone />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phones/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
