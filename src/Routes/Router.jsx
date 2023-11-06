import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignUp from "../Components/SignUp/SignUp";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Details from "../Pages/Details/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
          path:"allItems",
          element: <AllFoodItems></AllFoodItems>,
        },
        {
          path:"details/:id",
          element:<Details></Details>
        }
    ],
  },
]);
export default Router;
