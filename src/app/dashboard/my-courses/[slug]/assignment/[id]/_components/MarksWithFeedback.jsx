import React from "react";

const MarksWithFeedback = ({
  totalAssignmentMarks,
  firstPenaltyAssignmentMarks,
  secondPenaltyAssignmentMarks,
  updatedSubmission,
}) => {
  const calculateOnSubmittedMarks = (lateSubmission) => {
    if (lateSubmission === 0) {
      return totalAssignmentMarks;
    } else if (lateSubmission === 1) {
      return firstPenaltyAssignmentMarks;
    } else {
      return secondPenaltyAssignmentMarks;
    }
  };

  return (
    <div className="mb-3 space-y-3 bg-slate-800 p-5 text-sm text-white shadow-lg">
      {/* Show exam status base UI and final marks */}
      {updatedSubmission ? (
        updatedSubmission.isChecked ? (
          <div className="flex items-center justify-center gap-3 rounded-sm bg-slate-900 p-2 font-medium">
            <p>You have got</p>
            <p className="rounded-sm bg-[#5b15cf] px-3 py-1.5 text-lg font-semibold md:text-xl md:font-bold">
              {updatedSubmission.finalMarks}
            </p>
            <p>
              out of{" "}
              {calculateOnSubmittedMarks(updatedSubmission?.lateSubmission)}
            </p>
          </div>
        ) : (
          <div className="text-center">
            Assignment Marks & feedback on processing
          </div>
        )
      ) : (
        <div className="text-center text-danger-1">
          You have not submitted yet
        </div>
      )}

      {/* Instructor Feedback */}
      {updatedSubmission?.feedback && (
        <div>
          <p className="mb-2 font-medium text-[#a36ef8]">Instructor Feedback</p>
          <p>{updatedSubmission.feedback}</p>
        </div>
      )}

      <hr className="border border-slate-200" />
    </div>
  );
};

export default MarksWithFeedback;
