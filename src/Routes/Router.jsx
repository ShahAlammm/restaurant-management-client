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
          path:"foods/:id",
          element:<Details></Details>,
          loader: ({params})=>fetch(`http://localhost:7000/foods/${params.id}`)
        },
        {
          path:"newPage",
          element:<NewPage></NewPage>
        },
        {
          path:"myFood",
          element:<MyFood></MyFood>
        },
        {
          path:"addFood",
          element:<AddFood></AddFood>
        },
        {
          path:"myOrder",
          element:<MyOrder></MyOrder>
        }
    ],
  },
]);
export default Router;
