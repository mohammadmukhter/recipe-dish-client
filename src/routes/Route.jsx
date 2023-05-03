import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Secondary from "../components/layouts/Secondary";
import Home from "../components/pages/home/Home";
import Recipe from "../components/pages/home/Recipe";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/login/Register";
import NotFound from "../components/pages/shared/NotFound";

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
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
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
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
