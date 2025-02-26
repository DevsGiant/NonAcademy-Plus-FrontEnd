"use client";

import { formatDateAndTime } from "@/utils/formateDate";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

const ViewSubmission = ({ updatedSubmission }) => {
  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url).then(
      () => {
        toast.success("URL copied!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      },
    );
  };

  const truncateUrl = (url, maxLength = 30) => {
    if (url.length > maxLength) {
      return `${url.substring(0, maxLength)}...`;
    }
    return url;
  };

  return (
    <div className="bg-white p-5 text-sm shadow-lg shadow-whiten">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-medium text-orange-500">Your Submission</p>
        <p>{formatDateAndTime(updatedSubmission?.submittedAt)}</p>
      </div>
      <div className="space-y-3">
        {/* Code URL */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCopyUrl(updatedSubmission?.code_url)}
              className="rounded-sm bg-[#e3eeff] px-2.5 py-2 text-nad-logo"
            >
              <FaLink className="text-base" />
            </button>
            <p>{truncateUrl(updatedSubmission?.code_url)}</p>
          </div>
          <Link
            href={`${updatedSubmission?.code_url}`}
            target="_blank"
            className="rounded-sm bg-slate-900 px-2.5 py-2 text-white"
          >
            <FaExternalLinkAlt className="text-base" />
          </Link>
        </div>
        {/* Live URL */}
        {updatedSubmission?.live_url && (
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCopyUrl(updatedSubmission?.live_url)}
                className="rounded-sm bg-[#e3eeff] px-2.5 py-2 text-nad-logo"
              >
                <FaLink className="text-base" />
              </button>
              <p>{truncateUrl(updatedSubmission?.live_url)}</p>
            </div>
            <Link
              href={`${updatedSubmission?.live_url}`}
              target="_blank"
              className="rounded-sm bg-slate-900 px-2.5 py-2 text-white"
            >
              <FaExternalLinkAlt className="text-base" />
            </Link>
          </div>
        )}
        {/* Additional URL */}
        {updatedSubmission?.additional_url && (
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCopyUrl(updatedSubmission?.additional_url)}
                className="rounded-sm bg-[#e3eeff] px-2.5 py-2 text-nad-logo"
              >
                <FaLink className="text-base" />
              </button>
              <p>{truncateUrl(updatedSubmission?.additional_url)}</p>
            </div>
            <Link
              href={`${updatedSubmission?.additional_url}`}
              target="_blank"
              className="rounded-sm bg-slate-900 px-2.5 py-2 text-white"
            >
              <FaExternalLinkAlt className="text-base" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewSubmission;
