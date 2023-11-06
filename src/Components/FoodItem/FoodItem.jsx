const FoodItem = ({ food }) => {
  console.log(food);
  const { _id, FoodName, FoodImage, FoodCategory, Price, FoodDetails } =
    food || {};
  return (
    <div className="hero bg-base-200 rounded-xl shadow-xl shadow-cyan-400">
      <div className="hero-content flex-col lg:flex-row">
        <img src={FoodImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl font-bold font-serif text-orange-500 italic">{FoodName}</h1>
          <h3 className="text-lg font-bold">{FoodCategory}</h3>
          <p className="py-1">{FoodDetails}</p>
          <p className="text-lg font-bold">Price: <span className="text-orange-500 ">{Price}$</span></p>
          <button className="btn btn-primary mt-2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
