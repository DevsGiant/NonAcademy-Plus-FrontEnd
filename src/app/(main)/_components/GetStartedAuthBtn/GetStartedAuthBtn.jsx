"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";

const GetStartedAuthBtn = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <Button size="lg" className="px-6 md:px-10">
      <Link href={loggedInUser ? "/dashboard" : "/auth/login"}>
        Get Started
      </Link>
    </Button>
  );
};

export default GetStartedAuthBtn;
