"use client";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext, useEffect } from "react";

const StoreFullCourseInfo = ({ singleDegreeData }) => {
  const { fullCourseInfo, setFullCourseInfo } = useContext(AuthContext);

  const updatedCourseCircular = (singleDegreeData) => {
    const data = {};
    singleDegreeData?.modules
      ?.sort((a, b) => a.sortValue - b.sortValue)
      ?.map((module) => {
        const lessonArr = module?.lessons?.map((lesson) => lesson?.slug);
        data[module.slug] = lessonArr;
      });

    return data;
  };

  useEffect(() => {
    if (singleDegreeData) {
      // console.log(updatedCourseCircular(singleDegreeData));
      const data = updatedCourseCircular(singleDegreeData);
      setFullCourseInfo(data);
    }
  }, [singleDegreeData]);

  return <div className="hidden">StoreFullCourseInfo</div>;
};

export default StoreFullCourseInfo;
