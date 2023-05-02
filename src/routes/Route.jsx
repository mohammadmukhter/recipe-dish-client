import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Home from "../components/pages/home/Home";
import Recipe from "../components/pages/home/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "recipe/:id",
        element: <Recipe></Recipe>,
      },
    ],
  },
]);

export default router;
