import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export const metadata = {
  title: "Registration Complete - NonAcademy",
  description: "A online learning platform. your career building university",
};

const ThankYouPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nad-primary-lite-1 px-4">
      <Card className="w-full max-w-sm shadow md:max-w-md lg:max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <FaRegCircleCheck className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-xl font-semibold md:text-2xl md:font-bold">
            Thank You for Registering for the Webinar!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            You&apos;ve successfully registered for the upcoming webinar. We
            will send the joining link to your phone number.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Go to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ThankYouPage;
