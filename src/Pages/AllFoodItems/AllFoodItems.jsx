import { useEffect, useState } from "react";
import FoodItem from "../../Components/FoodItem/FoodItem";
import SearchBar from "../../Components/SearchBar/SearchBar";
import axios from "axios";

const AllFoodItems = () => {
  const [foodItem, setFoodItem] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restaurant-management-server-ochre.vercel.app/foods`)
      .then((res) => {
        setFoodItem(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food items:", error);
        setLoading(false);
      });
  }, []);

  const filteredFoodItems = foodItem.filter((food) =>
    food.FoodName.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleSearch = (Item) => {
    setSearchItem(Item);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="container m-auto">
        <SearchBar onSearch={handleSearch}></SearchBar>
        <p className="text-3xl text-center mt-10 font-bold font-serif text-orange-500">
          Choose Your Favorite Food Items
        </p>
        {loading ? (
          <p className="text-center mt-5"><span className="loading loading-spinner text-secondary"></span></p>
        ) : (
          <>
            <div className="grid xl:grid-cols-2 gap-8 p-2 mt-5">
              {filteredFoodItems?.slice(6).map((food) => (
                <FoodItem key={food._id} food={food}></FoodItem>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="btn mr-2 px-4 py-2 bg-gray-300"
              >
                Prev
              </button>
              <button
                onClick={() => handlePageChange(page + 1)}
                className="btn ml-2 px-4 py-2 bg-gray-300"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllFoodItems;
