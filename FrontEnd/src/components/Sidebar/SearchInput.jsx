import React, { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../Hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No matching users found !!");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle btn-outline bg-gray-800"
        style={{ fontSize: "20px" }}
      >
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
