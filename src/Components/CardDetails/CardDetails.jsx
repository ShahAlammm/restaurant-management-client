import { useState } from "react";
import swal from "sweetalert";



const CardDetails = ({details}) => {
    const { FoodName, FoodImage, FoodCategory, Price, FoodDetails, Quantity} = details || {};
    const [showAlert, setShowAlert] = useState(false);

    const handleOrder = () => {
      if (Quantity > 0) {
        swal("Good job!", `Order placed for ${FoodName}!`, "success");
      } else {
        setShowAlert(true);
      }
    };


    return (
        <div>
        <div>
          <div
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url(${FoodImage})`,

            }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="max-w-lg text-white space-y-16"
              >
                <h1 className="mb-5 text-5xl font-extrabold font-serif text-orange-500">{FoodName}</h1>
                <p className="mb-5">
                  {FoodDetails}
                </p>
                <h1 className="text-xl font-serif italic">Food Category: <span className=" text-orange-500">{FoodCategory}</span></h1>
                <div className="lg:flex items-center justify-between">
                <h1 className="text-xl font-serif italic">Price: <span className=" text-orange-400">{Price}$</span></h1>
                <h1 className="text-2xl font-serif italic">Quantity: <span className=" text-orange-400">{Quantity}</span></h1>
                </div>
                <button onClick={handleOrder} className="btn mt-5 text-lg bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                  Order Now
                </button>
                {showAlert && (
                <div className="mt-3 text-red-500">
                  This item is currently out of stock.
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;