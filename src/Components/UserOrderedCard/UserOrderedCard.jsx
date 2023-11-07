import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserOrderedCard = ({ item, setOrderItem }) => {
  const { _id, FoodName, FoodImage, FoodCategory, Price } = item || {};


  const handleRemove = (_id) => {


      axios.delete(`http://localhost:7000/order/${_id}`).then((res) => {
      setOrderItem(res.data);
      });
      console.log(_id)
}


  return (
    <div className="hero bg-base-200 rounded-xl shadow-lg shadow-cyan-400">
      <div className="hero-content flex-col lg:flex-row">
        <img src={FoodImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl font-bold font-serif text-orange-500 italic">
            {FoodName}
          </h1>
          <h className="text-lg font-bold">{FoodCategory}</h>
          <p className="text-lg font-bold">
            Price: <span className="text-orange-500 ">{Price}$</span>
          </p>
          <Link to={`/foods/${_id}`}>
            <button className="btn bg-orange-500 hover:bg-sky-400 text-white mt-2">
              details
            </button>
          </Link>
          <button onClick={()=>handleRemove(_id)} className="btn 2xl:ml-28  md:ml-10 ml-12 bg-red-500 hover:bg-green-400 text-white mt-2">X</button>
        </div>
      </div>
    </div>
  );
};

export default UserOrderedCard;
