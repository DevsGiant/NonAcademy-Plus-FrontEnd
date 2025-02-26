"use client";

import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const router = useRouter();
  const token = Cookies.get("nad_auth_token");
  const [fullCourseInfo, setFullCourseInfo] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/student/auth/me");
      setLoggedInUser(response?.data?.data);
    } catch (err) {
      console.error("Failed to fetch user:", err);
      const statusCode = err.response.status;
      switch (statusCode) {
        case 400:
          console.log("Bad Request: ", err.message);
          break;
        case 401:
          console.log("Unauthorized: ", err.message);
          Cookies.remove("nad_auth_token");
          setLoggedInUser(null);
          router.push("/auth/login");
          // Handle redirect to login page, e.g., navigate('/login')
          break;
        case 403:
          console.log("Forbidden request: ", err.message);
          Cookies.remove("nad_auth_token");
          setLoggedInUser(null);
          router.push("/auth/login");
          // Handle redirect to login page, e.g., navigate('/login')
          break;
        case 404:
          console.log("Not Found: ", err.message);
          break;
        case 500:
          console.log("Internal Server Error: ", err.message);
          break;
        default:
          console.log("Error fetching my courses:", err.message);
      }
      setLoggedInUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post("/student/auth/logout");
      if (response?.data?.success == false) {
        return toast.success(response?.data?.message);
      }

      Cookies.remove("nad_auth_token");
      setLoggedInUser(null);
      router.push("/");
      toast.success("Logout Successfully!");
    } catch (err) {
      console.log({ err });
    }
  };

  const authInfo = {
    loading,
    fetchUser,
    loggedInUser,
    setLoggedInUser,
    handleLogout,
    fullCourseInfo,
    setFullCourseInfo
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
