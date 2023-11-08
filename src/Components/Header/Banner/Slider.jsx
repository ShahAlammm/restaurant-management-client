import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://i.ibb.co/MpNsks9/bann-7.jpg",
    },
    {
      image: "https://i.ibb.co/yh00MVW/bann-3.jpg",
    },
    {
      image: "https://i.ibb.co/WkyXv6k/bann-4.jpg",
    },
    {
      image: "https://i.ibb.co/Rg9DQrG/bann-2.jpg",
    },
    {
      image: "https://i.ibb.co/hd0QkQq/bann-6.webp",
    },
    {
      image: "https://i.ibb.co/q1ngXm8/bann-1.webp",
    },
    // Add more slides with title, description, and link as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative" style={{ width: "100%", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentSlide * 100}%)`,
          position: "relative",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ width: "100%", flex: "0 0 100%", position: "relative" }}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", position: "relative" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                // background:
                //   "linear-gradient(to right, #151515, rgba(1, 1, 1, 0))",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <div
              className="absolute"
              style={{
                // position: "absolute",
                top: "50%",
                left: "52%",
                transform: "translate(-50%, -50%)",
                textAlign: "left",
                color: "white",
                width: "100%",
                height: "80%",
              }}
            >
              <div className="relative z-[1] space-y-4 lg:space-y-12">
                <h2 className="text-3xl lg:text-7xl font-extrabold font-serif">
                  {slide.title}
                </h2>
                <p className="text-sm w-1/2 lg:text-xl font-bold lg:w-1/3">
                  {slide.description}
                </p>
              </div>
              <div className="relative sm:mt-44 lg:mt-48 xl:mt-96">
                <Link to={'/allItems'}>
                  <button className="btn bg-orange-500 text-white w-16 sm:w-28 ml-80 sm:ml-[600px] 2xl:ml-[1600px]  2xl:mt-80 xl:ml-[1200px] lg:ml-[780px]">view all
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
