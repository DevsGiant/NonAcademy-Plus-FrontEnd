"use client";

import Spinner from "@/components/ui/Spinner";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ChangePassword from "./ChangePassword";
import UpdateProfile from "./UpdateProfile";

const ProfileViewPage = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-5 gap-5 md:gap-7 lg:gap-8">
      <UpdateProfile />
      <ChangePassword />
    </div>
  );
};

export default ProfileViewPage;
