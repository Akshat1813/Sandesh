import { RiLogoutBoxLine } from "react-icons/ri";
import React from "react";
import useLogOut from "../../Hooks/useLogOut.js";

0
const LogoutButton = () => {
  const { loading, logout } = useLogOut();
  return (
    <div className="mt-auto">
      {!loading ? 
        (<RiLogoutBoxLine
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />) : (
          <span className="loading loading-spinner"></span>
        )
      }
    </div>
  );
};

export default LogoutButton;
