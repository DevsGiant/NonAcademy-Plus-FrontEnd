import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";

export const handleRequestOtp = async () => {
  try {
    const response = await axiosInstance.post("/student/auth/request-otp");
    if (response?.data?.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(
      error?.response?.data?.message || "An unexpected error occurred!",
    );
  }
};
