import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container m-auto">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
