import React from "react";
import DegreeDetails from "./DegreeDetails";

const ViewSingleDegreeContent = async ({
  slug,
  singleLessonSlug,
  fullCourseInfo,
  course,
  data,
}) => {
  return (
    <DegreeDetails
      data={data}
      course={course}
      singleLessonSlug={singleLessonSlug}
      slug={slug}
      fullCourseInfo={fullCourseInfo}
    />
  );
};

export default ViewSingleDegreeContent;
