import React from "react";
import { BsSearchHeart } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle btn-outline bg-gray-800" style={{ fontSize: '20px' }}>
        <BsSearchHeart />
      </button>
    </form>
  );
};

export default SearchInput;


//STARTUP CODE FOR SEARCHINPUT
// import React from "react";
// import { BsSearchHeart } from "react-icons/bs";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle btn-outline bg-gray-800" style={{ fontSize: '20px' }}>
//         <BsSearchHeart />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
