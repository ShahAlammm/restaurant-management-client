import { useEffect, useState } from "react";
import Slider from "../../Components/Header/Banner/Slider";
import axios from "axios";
import Card from "../../Components/Card/Card";
import Cooker from "../../Components/Cooker/Cooker";
import Review from "../../Components/Review/Review";
import PublicReview from "../../Components/Review/PublicReview";
import Team from "../../Components/Team/Team";
import { Link } from "react-router-dom";

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://restaurant-management-server-ochre.vercel.app/foods")
      .then((res) => {
        setFoodItems(res.data);
      });
  }, []);
  return (
    <div>
      <Slider></Slider>
      <div className="container m-auto">
        <div className="text-center mt-28 space-y-8">
          <h2 className="text-3xl font-serif italic font-semibold text-orange-400 ">
            Enjoy To Test
          </h2>
          <h1 className="text-7xl font-bold italic">Our Famous Recipes</h1>
          <p className="text-lg italic">
            Assertively myocardinate robust e-tailers for extensible human
            capital. <br /> dpropriately benchmark networks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {foodItems?.slice(0, 6).map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center items-center ">
          <Link to="/allItems">
            <button className="btn bg-orange-500 hover:bg-blue-500 text-white">
              See all
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <Cooker></Cooker>
          <Review></Review>
          <Team></Team>
          <PublicReview></PublicReview>
        </div>
      </div>
    </div>
  );
};

export default Home;
