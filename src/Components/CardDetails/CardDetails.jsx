

const CardDetails = ({details}) => {
    const {  id, image, } = details || {};

    return (
        <div>
        <div>
          <div
            className="hero h-[900px] "
            style={{
              backgroundImage: `url(${"image"})`,

            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="max-w-md text-white"
              >
                <h1 className="mb-5 text-5xl font-extrabold font-serif">{"title"}</h1>
                <p className="mb-5">
                  {/* {detail} */}
                </p>
                <h1 className="text-xl font-serif">{"text"}</h1>
                {/* <button onClick={handleAddBooking} className="btn mt-5 text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                  Booking Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;