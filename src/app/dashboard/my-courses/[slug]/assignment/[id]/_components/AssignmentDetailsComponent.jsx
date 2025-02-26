"use client";

import { formatDateAndTime } from "@/utils/formateDate";
import HTMLReactParser from "html-react-parser";
import React, { useState } from "react";
import MarksWithFeedback from "./MarksWithFeedback";
import SubmitAssignmentModal from "./SubmitAssignmentModal";
import ViewSubmission from "./ViewSubmission";

const AssignmentDetailsComponent = ({ assignmentDetails }) => {
  const [updatedSubmission, setUpdatedSubmission] = useState(
    assignmentDetails?.submission,
  );

  // assignment marks calculation
  const totalAssignmentMarks =
    assignmentDetails?.assignment?.assignmentMarks +
    assignmentDetails?.assignment?.extraCurricularMarks;

  const firstPenaltyPercentage =
    assignmentDetails?.assignment?.penaltyPercentage_1;
  const secondPenaltyPercentage =
    assignmentDetails?.assignment?.penaltyPercentage_2;

  const firstPenaltyAssignmentMarks = Math.ceil(
    (totalAssignmentMarks * (100 - firstPenaltyPercentage)) / 100,
  );

  const secondPenaltyAssignmentMarks = Math.ceil(
    (totalAssignmentMarks * (100 - secondPenaltyPercentage)) / 100,
  );

  // assignment deadline / due date and time
  const firstDueDate = assignmentDetails?.assignment?.dueDate_1;
  const secondDueDate = assignmentDetails?.assignment?.dueDate_2;

  return (
    <div className="grid grid-cols-5 gap-5 md:gap-7 lg:gap-8">
      {/* Assignment Details Section */}
      <div className="col-span-5 xl:col-span-3">
        <h4 className="mb-3 text-xl font-semibold md:text-2xl md:font-bold">
          {assignmentDetails?.assignment?.title}
        </h4>
        <div className="mb-6">
          {HTMLReactParser(assignmentDetails?.assignment?.description)}
        </div>

        {/* Exam deadline section */}
        <div className="divide-y divide-slate-200 rounded-md border bg-white p-5 text-sm font-medium shadow-lg shadow-gray-200">
          <p className="mb-3 text-base font-semibold text-slate-950 md:text-lg">
            Exam Deadlines & Marks
          </p>

          <div className="py-3">
            <div className="flex justify-between pb-1 text-slate-600">
              <p>First Deadline:</p>
              <p>{formatDateAndTime(firstDueDate)}</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Total Marks:</p>
              <p>{totalAssignmentMarks}</p>
            </div>
          </div>

          {secondDueDate && (
            <div className="py-3">
              <div className="flex justify-between pb-1 text-slate-600">
                <p>Second Deadline (with Penalty {firstPenaltyPercentage}%):</p>
                <p>{formatDateAndTime(secondDueDate)}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Marks After Penalty:</p>
                <p>{firstPenaltyAssignmentMarks}</p>
              </div>
            </div>
          )}

          <div className="py-3">
            <div className="flex justify-between pb-1 text-slate-600">
              <p>Final Deadline (with Penalty {secondPenaltyPercentage}%):</p>
              <p>During course time</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Marks After Penalty:</p>
              <p>{secondPenaltyAssignmentMarks}</p>
            </div>
          </div>
        </div>

        {/* Submit Assignment Modal */}
        {!updatedSubmission?.isChecked && (
          <div className="mt-5 flex justify-center">
            <SubmitAssignmentModal
              assignmentId={assignmentDetails?.assignment?._id}
              setUpdatedSubmission={setUpdatedSubmission}
            />
          </div>
        )}
      </div>

      {/* Mark and Instructor Feedback Section */}
      <div className="col-span-5 xl:col-span-2">
        <MarksWithFeedback
          updatedSubmission={updatedSubmission}
          totalAssignmentMarks={totalAssignmentMarks}
          firstPenaltyAssignmentMarks={firstPenaltyAssignmentMarks}
          secondPenaltyAssignmentMarks={secondPenaltyAssignmentMarks}
        />

        {/* Show submission date, time and links */}
        {updatedSubmission && (
          <ViewSubmission updatedSubmission={updatedSubmission} />
        )}
      </div>
    </div>
  );
};

export default AssignmentDetailsComponent;
