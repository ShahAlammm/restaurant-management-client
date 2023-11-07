import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const FoodImage = form.FoodImage.value;
    const FoodName = form.FoodName.value;
    const FoodCategory = form.FoodCategory.value;
    const FoodOrigin = form.FoodOrigin.value;
    const Price = form.Price.value;
    const FoodDetails = form.FoodDetails.value;
    const Quantity = form.Quantity.value;

    const newProduct = {
      FoodName,
      FoodCategory,
      FoodOrigin,
      Price,
      FoodDetails,
      FoodImage,
      Quantity,
    };

    axios.post(`http://localhost:7000/foods`,newProduct)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="bg-base-200 p-24 lg:px-40  font-bold font-serif ">
      <h2 className="text-3xl font-extrabold text-orange-500 text-center">
        Add A Food Item
      </h2>
      <form onSubmit={handleAddProduct}>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg ">Food Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="FoodImage"
                placeholder="Food Image URL only"
                className="input input-bordered input-primary w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="FoodName"
                placeholder="Food Name"
                className="input input-bordered input-primary w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text text-lg">Food Category</span>
            </label>
            <label>
              <input
                type="text"
                name="FoodCategory"
                placeholder="Food Category"
                className="input input-bordered input-primary w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg ">
                Food Origin (Country){" "}
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="FoodOrigin"
                required
                placeholder="Country"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text text-lg ">Food Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Price"
                required
                placeholder="Food Price"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg ">
                A short description of the food item
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="FoodDetails"
                required
                placeholder="Short Details"
                className="textarea textarea-primary w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-32">
            <label className="label">
              <span className="label-text text-lg ">Quantity</span>
            </label>
            <div className="input-group text-xl">
              <input
                className="input input-bordered input-primary w-4/12 h-10 text-xl"
                type="number"
                name="Quantity"
                required
                max={20}
                min={0}
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn text-white bg-orange-500 btn-block"
        />
      </form>
    </div>
  );
};
export default AddFood;
