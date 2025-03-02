"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";

const GetStartedAuthBtn = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <Button
      asChild
      size="lg"
      className="rounded-md px-6 text-sm font-semibold md:px-10 md:text-base"
    >
      <Link href={loggedInUser ? "/dashboard" : "/auth/login"}>
        Get Started
      </Link>
    </Button>
  );
};

export default GetStartedAuthBtn;
