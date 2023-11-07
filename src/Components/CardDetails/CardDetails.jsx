

const CardDetails = ({details}) => {
    const { FoodName, FoodImage, FoodCategory, Price, FoodDetails} = details || {};


const handleOrder = ()=> {

}


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
                className="max-w-lg text-white"
              >
                <h1 className="mb-5 text-5xl font-extrabold font-serif text-orange-500">{FoodName}</h1>
                <p className="mb-5">
                  {FoodDetails}
                </p>
                <h1 className="text-xl font-serif italic">Food Category: <span className=" text-orange-500">{FoodCategory}</span></h1>
                <h1 className="text-xl font-serif italic">Price: <span className=" text-orange-400">{Price}$</span></h1>
                <button onClick={handleOrder} className="btn mt-5 text-lg bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;