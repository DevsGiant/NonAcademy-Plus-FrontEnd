import { getAssignmentById } from "@/api/services/assignment/assignmentService";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";
import AssignmentDetailsComponent from "./_components/AssignmentDetailsComponent";
import taskTick from "/public/images/dashboard/tasks-tick.svg";

export const metadata = {
  title: "Check Assignment - NonAcademy",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const AssignmentDetailsPage = async ({ params }) => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch the assignment details by id
  const assignmentDetails = await getAssignmentById(token, params.id);

  return (
    <div>
      {/* Heading */}
      <div className="mb-4 flex items-end">
        <div className="flex items-center gap-2 text-lg font-semibold text-slate-700 md:text-xl">
          <div>
            <Image src={taskTick} alt="tick" />
          </div>
          <span>Module Assignment</span>
        </div>
        <hr className="ml-2 flex-grow border-slate-300 pb-2" />
      </div>
      {/* Assignment and Feedback Container (ONlY FOR CLIENT COMPONENT) */}
      <AssignmentDetailsComponent
        token={token}
        assignmentDetails={assignmentDetails?.data}
      />
    </div>
  );
};

export default AssignmentDetailsPage;
