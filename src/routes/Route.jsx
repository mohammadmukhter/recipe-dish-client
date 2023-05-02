import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Secondary from "../components/layouts/Secondary";
import Home from "../components/pages/home/Home";
import Recipe from "../components/pages/home/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Secondary></Secondary>,
    children: [
      {
        path: "/",
        element: <Navigate to="/Home/"></Navigate>,
      },
      {
        path: "recipe/:id",
        element: <Recipe></Recipe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipe/${params.id}`),
      },
    ],
  },
  {
    path: "/home",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
