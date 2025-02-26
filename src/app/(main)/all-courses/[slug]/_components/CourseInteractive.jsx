import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import interactive from "../../../../../../public/images/courses/interactive.webp";

const CourseInteractive = () => {
  /* TODO: static data removed */
  return (
    <div className="mt-8 rounded-lg bg-gray-50 px-6 py-4">
      <h3 className="mb-2 block text-2xl font-extrabold tracking-tight text-nad-gray-9">
        This course is interactive
      </h3>
      <p className="text-sm">
        Interactive courses include hands-on coding exercises to practice as you
        learn. You practice exercises in a VS Code like IDE without any
        installation/setup.
      </p>
      <Button
        className="mt-2 border-primary text-sm font-medium text-primary"
        size="sm"
        variant="outline"
      >
        Try out a demo exercise
      </Button>
      <div className="mt-2 cursor-pointer">
        <Image
          className="h-auto max-w-full"
          src={interactive}
          alt="interactive"
        />
      </div>
    </div>
  );
};

export default CourseInteractive;
