import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { id, FoodName, FoodImage, FoodCategory } = item || {};
  return (
    <div>
      <div
        className="w-80 lg:w-96 2xl:w-[450px] m-auto mt-12 shadow-2xl shadow-blue-300 rounded-2xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="group relative block bg-black rounded-2xl">
          <img
            alt=""
            src={FoodImage}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-50 rounded-2xl"
          />

          <div
            className="relative p-4 sm:p-6 lg:p-8"
            data-aos="fade-up"
            data-aos-duration="2000"
          >

            <p className="text-xl font-bold text-orange-500 italic sm:text-2xl font-serif">{FoodName}</p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-80">
                <h3 className="text-white mb-2 font-serif">{FoodCategory}</h3>
                <Link to={`/item/${id}`}>
                  <button className="btn bg-gradient-to-r from-orange-500 to-amber-500 hover:bg-purple-400 shadow-lg shadow-blue-600/50 text-white">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
