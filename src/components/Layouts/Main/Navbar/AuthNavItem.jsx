"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";

const AuthNavItem = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <Button
      asChild
      size="lg"
      className="rounded-md text-base font-semibold tracking-wide"
    >
      {loggedInUser ? (
        <Link href="/dashboard">Dashboard</Link>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </Button>
  );
};

export default AuthNavItem;
