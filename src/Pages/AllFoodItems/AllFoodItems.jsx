import { useEffect, useState } from "react";
import FoodItem from "../../Components/FoodItem/FoodItem";
import SearchBar from "../../Components/SearchBar/SearchBar";
import axios from "axios";

const AllFoodItems = () => {
    const [foodItem, setFoodItem] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:7000/foods`).then(res=>{
            setFoodItem(res.data)
        })
    },[])
  return (
    <div>
      <div className="container m-auto">
        <SearchBar></SearchBar>
        <p className="text-3xl text-center mt-10 font-bold font-serif text-orange-500">Choose Your Favorite Food Items</p>
        <div className="grid xl:grid-cols-2 gap-5 p-2 mt-5">
            {
              foodItem?.map(food=> <FoodItem key={food._id} food={food}></FoodItem>)
            }
        </div>
      </div>
    </div>
  );
};

export default AllFoodItems;
