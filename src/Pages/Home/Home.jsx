import { useEffect, useState } from "react";
import Slider from "../../Components/Header/Banner/Slider";
import axios from "axios";
import Card from "../../Components/Card/Card";
import Cooker from "../../Components/Cooker/Cooker";
import Review from "../../Components/Review/Review";
import PublicReview from "../../Components/Review/PublicReview";
import Team from "../../Components/Team/Team";

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7000/items").then((res) => {
      setFoodItems(res.data);
    });
  }, []);
  return (
    <div>
      <Slider></Slider>
      <div className="container m-auto">
        <div className="text-center mt-28 space-y-8">
          <h2 className="text-3xl font-serif italic font-semibold text-orange-400 ">
            Corporate Applications
          </h2>
          <h1 className="text-7xl font-bold">Our Services</h1>
          <p className="text-lg italic">
            Assertively myocardinate robust e-tailers for extensible human
            capital. <br /> dpropriately benchmark networks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {foodItems?.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </div>
        <div className="mt-10 flex justify-end items-end ">
          <button className="btn bg-orange-500 w-28 text-white">
            view more
          </button>
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
