const Cooker = () => {
  return (
    <div>
      <div className="hero rounded-lg bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/svDhTvL/Chef-PNG-File.png"
            className="max-w-sm rounded-full shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Our Chef : <span className="text-orange-500">Jon Warent Nio</span>
            </h1>
            <p className="py-6">
              This is one of the basic areas taught in culinary skills. You must
              know how to hold and use a knife. Reason being, you do not want to
              serve diners food with bits of your flesh and blood in it!
              Professional chefs advise this when using a knife. Hold the knife
              using your dominant hand by placing your thumb beside the blade
              where it meets the handle. Rest your thumb on the blade nearest to
              the handle. Curl the fingers on your nondominant hand and use your
              middle finger lower knuckles to guide the cutting. Roll the knife
              on the board as you cut ensuring your wrist is relaxed. This is
              one of the best cooking tips from chefs you can ever learn. This
              technique not only gives you uniformity but also ensures you do
              not injure yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooker;
