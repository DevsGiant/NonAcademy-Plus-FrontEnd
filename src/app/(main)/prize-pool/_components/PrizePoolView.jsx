"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PrizePoolView = () => {
  const { loggedInUser, fetchUser } = useContext(AuthContext);
  const [latestPrizePoolData, setLatestPrizePoolData] = useState({});

  function formatDateTime(inputDate) {
    if (!inputDate) return;
    const date = new Date(inputDate);

    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options)?.format(
      date,
    );

    const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedTime = new Intl.DateTimeFormat("en-US", optionsTime)?.format(
      date,
    );

    return `${formattedDate} at ${formattedTime}`;
  }

  const fetchLatestPrizePoolData = async () => {
    try {
      const response = await axiosInstance.get("/student/prize-pool/latest");
      return response.data?.data || {};
    } catch (error) {
      console.error("Error fetching latest prize pool data: ", error);
    }
  };

  useEffect(() => {
    fetchLatestPrizePoolData().then((data) => {
      setLatestPrizePoolData(data?.data);
    });
  }, []);

  // console.log(loggedInUser, latestPrizePoolData);

  const handleIsAvailable = (start, end) => {
    const currentDate = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (currentDate >= startDate && currentDate <= endDate) {
      return "yes";
    } else if (currentDate < startDate) {
      return "wait";
    } else {
      return "expired";
    }
  };

  const formatPosition = (position) => {
    switch (position) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      default:
        return `${position}th`;
    }
  };

  const handleParticipate = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: `It will charge ${latestPrizePoolData?.requiredPoints} AVT.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0048b0",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Go Ahead",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await axiosInstance.patch(
            `/student/prize-pool/${latestPrizePoolData?._id}/participate`,
          );

          if (response?.data?.success === false) {
            return toast.error(response?.data?.message);
          } else {
            // toast.success(response?.data?.message);
            Swal.fire({
              title: "Success",
              text: response?.data?.message,
              icon: "success",
            });

            fetchLatestPrizePoolData().then((data) => {
              setLatestPrizePoolData(data?.data);
            });

            await fetchUser();
          }
        }
      });
    } catch (error) {
      console.error("Error participating in the prize pool: ", error);
    }
  };

  if (Object.keys(latestPrizePoolData)?.length === 0) {
    return (
      <div className="mt-3 text-center text-xl font-semibold text-red-600">
        Currently no Prize Pool available!
      </div>
    );
  }

  return (
    <div className="">
      {latestPrizePoolData?.bannerImage &&
      latestPrizePoolData?.prizeLists?.length > 0 ? (
        <div className="grid min-h-64 grid-cols-1 bg-red-300 lg:grid-cols-2">
          <div className="relative h-[300px] w-full">
            <img
              src={latestPrizePoolData?.bannerImage}
              alt="Example Image"
              fill
              className="h-full w-full object-fill"
            />
          </div>
          <div className="relative">
            <Swiper
              effect={"fade"}
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, EffectFade]}
              className="mySwiper"
            >
              {latestPrizePoolData?.prizeLists?.map((prize, index) => (
                <SwiperSlide key={prize?._id}>
                  <div className="relative h-[300px]">
                    <img
                      src={prize?.image}
                      alt="Slide 1"
                      fill
                      className="h-full w-full object-fill"
                    />
                    <h3 className="absolute right-3 top-3 rounded-md bg-amber-500 px-2 py-1 font-semibold text-white">
                      {formatPosition(prize?.position)} Prize
                    </h3>
                    <h3 className="absolute bottom-3 left-3 rounded-md bg-blue-600 px-2 py-1 font-semibold text-white">
                      {prize?.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div>
          {latestPrizePoolData?.bannerImage && (
            <div className="relative w-full">
              <img
                src={latestPrizePoolData?.bannerImage}
                alt="Example Image"
                fill
                className="mx-auto max-h-[350px] rounded object-fill md:w-[70%] lg:w-[60%]"
              />
            </div>
          )}

          {latestPrizePoolData?.prizeLists?.length > 0 && (
            <div className="relative">
              <Swiper
                effect={"fade"}
                pagination={{
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className="mySwiper"
              >
                {latestPrizePoolData?.prizeLists?.map((prize, index) => (
                  <SwiperSlide key={prize?._id}>
                    <div className="relative h-[300px]">
                      <img
                        src={prize?.image}
                        alt="Slide 1"
                        fill
                        className="h-full w-full object-fill"
                      />
                      <h3 className="absolute right-3 top-3 rounded-md bg-amber-500 px-2 py-1 font-semibold text-white">
                        {formatPosition(prize?.position)} Prize
                      </h3>
                      <h3 className="absolute bottom-3 left-3 rounded-md bg-blue-600 px-2 py-1 font-semibold text-white">
                        {prize?.title}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      )}

      {/* Prize Event Details */}
      {latestPrizePoolData?.details ? (
        <div className="mt-6 grid grid-cols-1 gap-5 md:mt-9 lg:grid-cols-2">
          {/* prize pool's details  */}
          {latestPrizePoolData?.details && (
            <div className="mx-auto w-full rounded-lg bg-white p-4 shadow-lg  md:p-8">
              {HTMLReactParser(latestPrizePoolData.details)}
            </div>
          )}

          <div className="mx-auto flex w-full flex-col justify-between gap-3 rounded-lg bg-white p-4 shadow-lg  md:p-8">
            <div className="">
              <h1 className="text-xl font-semibold text-gray-800 md:text-3xl md:font-bold">
                {latestPrizePoolData?.title} 🎁
              </h1>
              <p className="text-base text-gray-700 md:mt-2 md:text-xl">
                {latestPrizePoolData?.subtitle}
              </p>
              <div className="mt-3 space-y-1 text-sm text-gray-600 md:mt-4 md:space-y-2 md:text-lg">
                <p>
                  <span className="font-semibold">Registration Start:</span>{" "}
                  {formatDateTime(latestPrizePoolData?.registrationStarts)}
                </p>
                <p>
                  <span className="font-semibold">Registration End:</span>{" "}
                  {formatDateTime(latestPrizePoolData?.registrationEnds)}
                </p>
                <p>
                  <span className="font-semibold">Prize Giving Ceremony: </span>
                  {formatDateTime(latestPrizePoolData?.prizeGivingDate)}
                </p>
                <p>
                  <span className="font-semibold">Entry Fee:</span>{" "}
                  <span className="font-medium text-orange-600">
                    {latestPrizePoolData?.requiredPoints} AVT
                  </span>{" "}
                  Only
                </p>
                <p>
                  <span className="font-semibold">Participated: </span>
                  {latestPrizePoolData?.participatesList?.length || 0}{" "}
                  {(latestPrizePoolData?.participatesList?.length || 0) > 1
                    ? "Persons"
                    : "Person"}
                </p>
              </div>
            </div>

            <div>
              {latestPrizePoolData?.isPrizeGiven ? (
                <p className=" rounded-md bg-orange-500 p-2 text-center font-semibold text-white">
                  Prize has been given to the winners
                </p>
              ) : (
                <>
                  {latestPrizePoolData?.isPrizeGiven ? (
                    <p className="mt-3 rounded-md bg-orange-500 p-2 text-center font-semibold text-white">
                      Prize has been given to the winners
                    </p>
                  ) : (
                    <>
                      {loggedInUser ? (
                        <>
                          {latestPrizePoolData?.participatesList?.includes(
                            loggedInUser?._id,
                          ) ? (
                            // .find(
                            //   (participate) => participate?._id === loggedInUser?._id,
                            // )
                            <Button
                              disabled
                              onClick={() =>
                                toast.success("You have already participated")
                              }
                              className="mt-4 w-full md:mt-6 md:text-base md:font-semibold"
                            >
                              You have already participated
                            </Button>
                          ) : (
                            <>
                              {handleIsAvailable(
                                latestPrizePoolData?.registrationStarts,
                                latestPrizePoolData?.registrationEnds,
                              ) == "yes" ? (
                                <Button
                                  onClick={handleParticipate}
                                  className="mt-4 w-full md:mt-6 md:text-base md:font-semibold"
                                >
                                  Participate Now
                                </Button>
                              ) : (
                                <Button
                                  disabled
                                  className="mt-4 w-full md:mt-6 md:text-base md:font-semibold"
                                >
                                  {handleIsAvailable(
                                    latestPrizePoolData?.registrationStarts,
                                    latestPrizePoolData?.registrationEnds,
                                  ) == "wait"
                                    ? `Reg. will start on: ${formatDateTime(latestPrizePoolData?.registrationStarts)}`
                                    : "Participation Date Expired"}
                                </Button>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <Button
                            onClick={() => toast.error("Login to participate")}
                            className="mt-4 w-full md:mt-6 md:text-base md:font-semibold"
                          >
                            <Link href="/auth/login">Login to Participate</Link>
                          </Button>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-4 w-full rounded-lg bg-white p-4 shadow-lg md:mt-6 md:w-[70%] md:p-8 lg:mt-8 lg:w-[60%]">
          <h1 className="text-xl font-semibold text-gray-800 md:text-3xl md:font-bold">
            {latestPrizePoolData?.title} 🎁
          </h1>
          <p className="text-base text-gray-700 md:mt-2 md:text-xl">
            {latestPrizePoolData?.subtitle}
          </p>
          <div className="mt-3 space-y-1 text-sm text-gray-600 md:mt-4 md:space-y-2 md:text-lg">
            <p>
              <span className="font-semibold">Registration Start:</span>{" "}
              {formatDateTime(latestPrizePoolData?.registrationStarts)}
            </p>
            <p>
              <span className="font-semibold">Registration End:</span>{" "}
              {formatDateTime(latestPrizePoolData?.registrationEnds)}
            </p>
            <p>
              <span className="font-semibold">Prize Giving Ceremony: </span>
              {formatDateTime(latestPrizePoolData?.prizeGivingDate)}
            </p>
            <p>
              <span className="font-semibold">Entry Fee:</span>{" "}
              <span className="font-medium text-orange-600">
                {latestPrizePoolData?.requiredPoints} AVT
              </span>{" "}
              Only
            </p>
            <p>
              <span className="font-semibold">Participated: </span>
              {latestPrizePoolData?.participatesList?.length || 0}{" "}
              {(latestPrizePoolData?.participatesList?.length || 0) > 1
                ? "Persons"
                : "Person"}
            </p>
          </div>

          {latestPrizePoolData?.isPrizeGiven ? (
            <p className="mt-3 rounded-md bg-orange-500 p-2 text-center font-semibold text-white">
              Prize has been given to the winners
            </p>
          ) : (
            <>
              {latestPrizePoolData?.isPrizeGiven ? (
                <p className="mt-3 rounded-md bg-orange-500 p-2 text-center font-semibold text-white">
                  Prize has been given to the winners
                </p>
              ) : (
                <>
                  {loggedInUser ? (
                    <>
                      {latestPrizePoolData?.participatesList?.includes(
                        loggedInUser?._id,
                      ) ? (
                        // .find(
                        //   (participate) => participate?._id === loggedInUser?._id,
                        // )
                        <Button
                          disabled
                          onClick={() =>
                            toast.success("You have already participated")
                          }
                          className="mt-4 w-full md:mt-6 md:text-base md:font-semibold"
                        >
                          You have already participated
                        </Button>
                      ) : (
                        <>
                          {handleIsAvailable(
                            latestPrizePoolData?.registrationStarts,
                            latestPrizePoolData?.registrationEnds,
                          ) == "yes" ? (
                            <Button
                              onClick={handleParticipate}
                              className="mt-4 w-full md:mt-6 md:text-base md:font-semibold"
                            >
                              Participate Now
                            </Button>
                          ) : (
                            <Button
                              disabled
                              className="mt-4 w-full md:mt-6 md:text-base md:font-semibold"
                            >
                              {handleIsAvailable(
                                latestPrizePoolData?.registrationStarts,
                                latestPrizePoolData?.registrationEnds,
                              ) == "wait"
                                ? `Reg. will start on: ${formatDateTime(latestPrizePoolData?.registrationStarts)}`
                                : "Participation Date Expired"}
                            </Button>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => toast.error("Login to participate")}
                        className="mt-4 w-full md:mt-6 md:text-base md:font-semibold"
                      >
                        <Link href="/auth/login">Login to Participate</Link>
                      </Button>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      )}

      {/* winners list  */}
      {latestPrizePoolData?.isPrizeGiven && (
        <div
          className={`mx-auto mt-6 rounded-lg bg-white p-4 shadow-lg md:mt-9 md:p-8 ${latestPrizePoolData?.details ? "lg:w-full" : "lg:w-[60%]"}`}
        >
          <h1 className=" mb-3 text-center text-xl font-semibold text-gray-800 md:text-3xl md:font-bold">
            Winners List 🏆
          </h1>
          <div className="mt-3 space-y-2 text-sm text-gray-600 md:mt-4 md:space-y-3 md:text-lg">
            <Table className=" bg-white font-medium text-slate-700">
              <TableBody>
                {latestPrizePoolData?.winnersList?.map((winner, index) => (
                  <TableRow key={winner._id}>
                    <TableCell>{formatPosition(winner?.position)}</TableCell>
                    <TableCell>
                      <Avatar className="h-14 w-14 lg:h-16 lg:w-16">
                        <AvatarImage src={winner?.id?.avatar} alt="Avatar" />
                        {/* <AvatarFallback>NA</AvatarFallback> */}
                      </Avatar>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-semibold">{winner?.id?.name}</p>
                        <p>{winner?.id?.user_id}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrizePoolView;
