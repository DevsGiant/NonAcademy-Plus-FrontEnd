"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateAndTime } from "@/utils/formateDate";
import Link from "next/link";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const AssignmentsTable = ({ assignments, slug }) => {
  return (
    <div className="w-full overflow-x-auto ">
      <Table className="border bg-white font-medium text-slate-700">
        <TableHeader>
          <TableRow className="bg-slate-500 text-white hover:bg-slate-500">
            <TableHead className="font-semibold text-white">
              Assignment
            </TableHead>
            <TableHead className="font-semibold text-white">Deadline</TableHead>
            <TableHead className="font-semibold text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments?.map((assignment) => (
            <TableRow key={assignment.title}>
              <TableCell>{assignment.title}</TableCell>
              <TableCell>{formatDateAndTime(assignment.dueDate_1)}</TableCell>
              <TableCell className="flex space-x-2">
                <Link
                  href={`/dashboard/my-courses/${slug}/assignment/${assignment._id}`}
                >
                  <button className="flex items-center gap-1.5 rounded bg-slate-200 px-3 py-2 font-semibold text-slate-800 transition-all hover:bg-slate-300">
                    <AiOutlineEye className="text-base" /> Check Details
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssignmentsTable;
