import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const UserOrderedCard = ({ item, setOrder, order }) => {
  const { _id, FoodName, FoodImage, FoodCategory, Price } = item || {};

  const handleDelete = async (_id) => {
    console.log("Deleting item with ID:", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("User confirmed deletion");

        try {
          const response = await axios.delete(
            `https://restaurant-management-server-ochre.vercel.app/order/${_id}`
          );

          if (response.status === 200) {
            console.log("Item successfully deleted");
            Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");

            // Update the state after successful deletion
            const remaining = order.filter((items) => items._id !== _id);
            console.log("Updated Order State:", remaining);
            setOrder(remaining);
          } else {
            console.log("Item not found");
            Swal.fire("Error", "Item not found.", "error");
          }
        } catch (error) {
          console.error("Error during deletion:", error);
          Swal.fire("Error", "An error occurred during deletion.", "error");
        }
      } else {
        console.log("User canceled deletion");
      }
    });
  };

  return (
    <div className="hero bg-base-200 rounded-xl shadow-lg shadow-cyan-400">
      <div className="hero-content flex-col lg:flex-row">
        <img src={FoodImage} className="max-w-sm rounded-lg shadow-2xl" alt={FoodName} />
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
          <button
            onClick={() => handleDelete(_id)}
            className="btn 2xl:ml-28  md:ml-10 ml-12 bg-red-500 hover:bg-green-400 text-white mt-2"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserOrderedCard;
