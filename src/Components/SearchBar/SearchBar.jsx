// import { useState } from "react";

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your search logic here, for example, fetching data based on the searchTerm
  //   console.log('Searching for:', searchTerm);
  // };
  return (
    <div className="flex justify-end">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered lg:w-96"
          />
          <button className="btn btn-square w-28 bg-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
