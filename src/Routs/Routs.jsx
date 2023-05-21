import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";
import Blog from "../components/Blog";
import AllToys from "../components/AllToys";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import ToyDetails from "../components/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../components/MyToys";
import UpdateToys from "../components/UpdateToys";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toys/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/singleToys/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/updateToys",
        element: <PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>,
      },
    ],
  },
]);

export default router;