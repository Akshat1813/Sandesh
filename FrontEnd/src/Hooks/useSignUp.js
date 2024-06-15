import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName) {
    toast.error("Full name cannot be empty !");
    return false;
  }
  if (!username) {
    toast.error("Username cannot be empty !");
    return false;
  }
  if (!password) {
    toast.error("Password cannot be empty !");
    return false;
  }
  if (!gender) {
    toast.error("Please select a gender !");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must contain at least 6 characters !");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match !");
    return false;
  }

  return true;
}
