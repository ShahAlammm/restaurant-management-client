import ReactPlayer from "react-player";

const Review = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <main className="px-3">
          <div className="text-4xl sm:text-5xl text-center my-10">
            What type of food do you like? <br />{" "}
            <p className="mt-4">You can try this.</p>{" "}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl m-auto">
            <div className="bg-white">
              <div className="w-full h-48 sm:h-56 object-cover">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=COSKmSSUadc"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="px-10 py-6 mb-10 text-center">
                <div className="text-2xl font-bold text-purple-500 mb-4">
                  MALAY
                </div>
                <span className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate tempore eligendi magnam distinctio molestias.
                  Incidunt at consequuntur consequatur officiis repudiandae!
                  Culpa cum vel tenetur itaque eius provident voluptatum
                  similique impedit?
                </span>
              </div>
            </div>

            <div className="bg-white">
              <div className="w-full h-48 sm:h-56 object-cover">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=COSKmSSUadc"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="px-10 py-6 mb-10 text-center">
                <div className="text-2xl font-bold text-green-500 mb-4">
                  CHINESE
                </div>
                <span className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate tempore eligendi magnam distinctio molestias.
                  Incidunt at consequuntur consequatur officiis repudiandae!
                  Culpa cum vel tenetur itaque eius provident voluptatum
                  similique impedit?
                </span>
              </div>
            </div>

            <div className="bg-white">
              <div className="w-full h-48 sm:h-56 object-cover">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=COSKmSSUadc"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="px-10 py-6 mb-10 text-center">
                <div className="text-2xl font-bold text-blue-500 mb-4">
                  INDIAN
                </div>

                <span className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate tempore eligendi magnam distinctio molestias.
                  Incidunt at consequuntur consequatur officiis repudiandae!
                  Culpa cum vel tenetur itaque eius provident voluptatum
                  similique impedit?
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Review;
