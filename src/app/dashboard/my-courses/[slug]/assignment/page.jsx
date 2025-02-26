import { getAssignmentsByCourseId } from "@/api/services/assignment/assignmentService";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import MyCoursesHeaderLayout from "../_components/MyCoursesHeaderLayout";
import AssignmentsSkeleton from "./_components/AssignmentsSkeleton";
import AssignmentsTable from "./_components/AssignmentsTable";

export const metadata = {
  title: "Assignment - NonAcademy",
  description: "An online learning platform. Your career-building university",
};

const AssignmentsPage = async ({ params }) => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch all assignments by course id
  const assignments = await getAssignmentsByCourseId(token, params.slug);

  return (
    <Suspense fallback={<AssignmentsSkeleton />}>
      {/* my courses top bar */}
      <MyCoursesHeaderLayout slug={params?.slug} />

      {/* assignments table */}
      {assignments?.data?.length > 0 ? (
        <AssignmentsTable assignments={assignments?.data} slug={params.slug} />
      ) : (
        // show empty assignments message
        <div className="flex h-52 items-center justify-center bg-white text-center md:h-64">
          <p className="text-lg font-semibold text-slate-700 md:text-xl">
            No assignments available at the moment.
          </p>
        </div>
      )}
    </Suspense>
  );
};

export default AssignmentsPage;
