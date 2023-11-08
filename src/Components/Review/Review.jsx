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
                  url="https://www.youtube.com/watch?v=uPAIdzUwHdU"
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
                  Mee Goreng means "Fried Noodles" in Malaysian language.
                  Malaysian style fried noodles is often spicy. It is made with
                  fresh yellow noodles stir fried in cooking oil with garlic,
                  onion, birds eye chili , chili paste, soy sauce, chicken,
                  prawns, fish cake and vegetables. Ingredients: 500g of Mee /
                  egg noodles 200g of chicken breast 8-10 pieces of prawn 2
                  pieces of fish cake 200g of taugi / beansprout 150g of mustard
                  leaves 4 garlic cloves 1 large onion 2 eggs 2 tbsp of oyster
                  sauce 1 1/2 tbsp of sweet soy sauce 1 tbsp of tomato sauce 1
                  tbsp of dark soy sauce 1/2 tsp of black pepper 1 tbsp of chili
                  paste 3 tbsp of oil salt to taste Thank you for watching,
                  please don’t forget to subscribe for more recipes!
                </span>
              </div>
            </div>

            <div className="bg-white">
              <div className="w-full h-48 sm:h-56 object-cover">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=I_6aMZwf9CU"
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
                  Master Chef John Zhang shows you tips on making perfect and
                  restaurant quality Chicken Manchurian for your guests and
                  family. Get the recipe:
                  https://www.tastelife.tv/recipe/chick... Chicken Manchurian
                  Recipe is a delicious and one of the most popular Indian
                  Chinese recipes that is made with chicken.Master Chef John
                  Zhang shows you tips on making perfect and restaurant quality
                  Chicken Manchurian for your guests and family. Get the recipe:
                  https://www.tastelife.tv/recipe/chick... Chicken Manchurian
                  Recipe is a delicious and one of the most popular Indian
                  Chinese recipes that is made with chicken.
                </span>
              </div>
            </div>

            <div className="bg-white">
              <div className="w-full h-48 sm:h-56 object-cover">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=0qSm029ROn4"
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
                  (1) Smoky Tandoori Style Chicken -Made using only one pan! A
                  smoky chicken tandoori recipe you can make at home using one
                  pan. It’s simple to make, and the flavours will amaze you.
                  This recipe is prepared by marinating the chicken in a spicy
                  tangy yoghurt mixture. This not only flavours the meat but
                  also tenderises it and makes it juicy. Traditionally chicken
                  tandoori is made using a tandoori oven, which is a cylindrical
                  clay oven that originated in India. As we don’t all have
                  tandoori ovens at home, this recipe has been simplified to
                  give you similar results at home. Enjoy my simple smoky
                  chicken tandoori made in one pan. 
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
