import { getLeaderboardByCourseId } from "@/api/services/leaderboard/leaderboardService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cookies } from "next/headers";
import Image from "next/image";
import React, { Suspense } from "react";
import { GiTrophyCup } from "react-icons/gi";
import assets from "../../../../../../public/images/images";
import MyCoursesHeaderLayout from "../_components/MyCoursesHeaderLayout";
import LeaderboardSkeleton from "./_components/LeaderboardSkeleton";

export const metadata = {
  title: "Leaderboard - NonAcademy",
  description: "An online learning platform. Your career-building university",
};

const leaderBoardPage = async ({ params }) => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch all leaderboard by course id
  const leaderboard = await getLeaderboardByCourseId(token, params.slug);

  // Destructure leaderboard data
  const { requestedStudent, leaderboardData } = leaderboard.data || {};

  // Check if both conditions are met
  const hasLeaderboardData = requestedStudent && leaderboardData?.length > 0;

  return (
    <Suspense fallback={<LeaderboardSkeleton />}>
      {/* my courses top bar */}
      <MyCoursesHeaderLayout slug={params?.slug} />

      {/* leaderboard header */}
      <div className="mb-5">
        <div className="flex items-start gap-1 md:items-center">
          <Image
            src={assets?.svgs?.teamLeader}
            alt="leader"
            className="h-[25px] w-[40px]"
          />
          <h4 className="text-base font-semibold md:text-xl">
            Leader Board -{" "}
            <span className="text-slate-700">{leaderboard.data.title}</span>
          </h4>
        </div>
      </div>

      {/* Conditional rendering based on leaderboard data */}
      {hasLeaderboardData ? (
        <>
          {/* show my rank (single user self) */}
          <div className="mb-5 md:mb-8">
            <p className="pb-2 text-sm font-medium text-slate-600">
              Your Position on Leader board
            </p>
            <Table className="bg-white font-medium">
              <TableHeader>
                <TableRow className="bg-slate-600 text-white hover:bg-slate-700">
                  <TableHead className="h-10 font-semibold text-white">
                    Rank
                  </TableHead>
                  <TableHead className="h-10 font-semibold text-white">
                    Name
                  </TableHead>
                  <TableHead className="h-10 font-semibold text-white">
                    Total Marks
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="text-[#5b15cf]">
                  <TableCell className="p-2 px-4">
                    {requestedStudent.rank}
                  </TableCell>
                  <TableCell className="flex items-center gap-2.5 p-2 px-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={
                          requestedStudent.student?.avatar ||
                          "/images/dashboard/avatar.png"
                        }
                        alt="Avatar"
                      />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                    <p>{requestedStudent.student?.name}</p>
                  </TableCell>
                  <TableCell className="p-2 px-4 font-semibold">
                    {requestedStudent.totalMarks}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* show all students rank */}
          <Table className="bg-white font-medium">
            <TableHeader>
              <TableRow className="bg-slate-600 text-white hover:bg-slate-600">
                <TableHead className="h-10 font-semibold text-white">
                  Rank
                </TableHead>
                <TableHead className="h-10 font-semibold text-white">
                  Name
                </TableHead>
                <TableHead className="h-10 font-semibold text-white">
                  Total Marks
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData?.map((data) => (
                <TableRow key={data.student._id} className="text-[#5b15cf]">
                  <TableCell className="p-2 px-4">
                    {data?.rank === 1 ? (
                      <GiTrophyCup className="text-base text-amber-500" />
                    ) : (
                      data?.rank
                    )}
                  </TableCell>
                  <TableCell className="flex items-center gap-2.5 p-2 px-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={
                          data.student?.avatar || "/images/dashboard/avatar.png"
                        }
                        alt="Avatar"
                      />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                    <p>{data.student?.name}</p>
                  </TableCell>
                  <TableCell className="p-2 px-4 font-semibold">
                    {data.totalMarks}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        // Show message if leaderboard is not available
        <h4 className="mt-14 text-center text-lg font-semibold text-gray-700 md:text-2xl lg:mt-28">
          Leaderboard Not Available!
        </h4>
      )}
    </Suspense>
  );
};

export default leaderBoardPage;
