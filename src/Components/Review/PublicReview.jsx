import img1 from '../../../public/icon image/download (1).jpg'
import img2 from '../../../public/icon image/download (2).jpg'
import img3 from '../../../public/icon image/download.jpg'
import img4 from '../../../public/icon image/images (1).jpg'
import img5 from '../../../public/icon image/images (2).jpg'
import img6 from '../../../public/icon image/images (3).jpg'
import img7 from '../../../public/icon image/images (4).jpg'
import img8 from '../../../public/icon image/images (5).jpg'

const PublicReview = () => {
  return (
    <section className="body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 italic text-orange-400">Reviews</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
      </div>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img6}/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Holden Caulfield</h2>
              <p >UI Designer</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center  border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img8}/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Henry Letham</h2>
              <p>CTO</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center  border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img7}/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Oskar Blinde</h2>
              <p >Founder</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center  border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img6}/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">John Doe</h2>
              <p >DevOps</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center  border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img5}/>
            <div className="flex-grow">
              <h2 className=" title-font font-medium">Martin Eden</h2>
              <p >Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center  border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img4}/>
            <div className="flex-grow">
              <h2 className=" title-font font-medium">Boris Kitua</h2>
              <p >UX Researcher</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center  border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img3}/>
            <div className="flex-grow">
              <h2 className=" title-font font-medium">Atticus Finch</h2>
              <p >QA Engineer</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center  border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img2}/>
            <div className="flex-grow">
              <h2 className=" title-font font-medium">Alper Kamu</h2>
              <p >System</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center  border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src={img1}/>
            <div className="flex-grow">
              <h2 className=" title-font font-medium">Rodrigo Monchi</h2>
              <p >Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PublicReview;
