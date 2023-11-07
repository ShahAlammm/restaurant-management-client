import { Link } from "react-router-dom";

const FoodItem = ({ food }) => {
  console.log(food);
  const { _id, FoodName, FoodImage, FoodCategory, Price } =
    food || {};
  return (
    <div className="hero bg-base-200 rounded-xl shadow-lg h-72 shadow-cyan-400">
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
            <button className="btn bg-orange-500 text-white mt-2">
              details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
