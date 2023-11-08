import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignUp from "../Components/SignUp/SignUp";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Details from "../Pages/Details/Details";
import NewPage from "../Pages/NewPage/NewPage";
import MyFood from "../Pages/Users/MyFood";
import AddFood from "../Pages/Users/AddFood";
import MyOrder from "../Pages/Users/MyOrder";
import PrivateRoute from "../Hook/PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "allItems",
        element: <AllFoodItems></AllFoodItems>,
      },
      {
        path: "foods/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-ochre.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: "newPage",
        element: <NewPage></NewPage>,
      },
      {
        path: "myFood",
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "myOrder",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default Router;
