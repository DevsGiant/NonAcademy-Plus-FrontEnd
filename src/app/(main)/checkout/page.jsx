import { getCourseDetails } from "@/api/services/courses/courseService";
import Container from "@/components/ui/Container";
// import { analytics } from "@/utils/gtag";
import { FiPhone } from "react-icons/fi";
import CheckoutTracking from "./_components/CheckoutTracking";
import PaymentBtn from "./_components/PaymentBtn";
// import { sendGTMEvent } from "@next/third-parties/google";

export const metadata = {
  title: "Checkout - NonAcademy",
  description: "A online learning platform. your career building university",
};

const CheckoutPage = async ({ searchParams }) => {
  const slug = searchParams.course;
  const courseDetails = await getCourseDetails(slug);
  // analytics.page("Checkout Page Viewed");
  // analytics.track("Checkout Page Viewed", {
  //   courseId: courseDetails._id,
  //   courseName: courseDetails.title,
  // });
  return (
    <div className="bg-gray-4">
      <Container>
        <div className="rounded-2xl border border-none bg-none p-0 md:border md:bg-white md:p-8">
          <CheckoutTracking courseDetails={courseDetails} />
          <div className="flex w-full flex-col gap-2">
            <h5 className="hidden text-xl font-semibold md:block">
              Complete your purchase
            </h5>
          </div>
          <div className="horizontal-line hidden md:block"></div>
          {/* Left Section: Course Info and Payment Summary */}
          <div className="flex w-full flex-col gap-3 lg:flex-row lg:gap-6">
            <div className="order-2 w-full flex-col lg:order-1 lg:flex lg:w-[57%]">
              <div className="order-2 mb-4 border-[#e9e9e9] bg-white px-3 py-2 shadow-[4px_11px_58px_rgba(0,0,0,0.07)] md:order-1 md:p-4 lg:mb-6 lg:rounded-lg lg:border">
                <div className="mb-4 flex gap-4">
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="aspect-video max-w-28 rounded object-cover md:w-32"
                      src={courseDetails.data.thumbnail}
                      alt={courseDetails.data.title}
                    />
                  </div>
                  <h5 className="text-xl font-semibold">
                    {courseDetails?.data?.title}
                  </h5>
                </div>
                <div className="p-0 lg:px-4 lg:py-2">
                  <p className="mb-4 font-semibold">Payment Details</p>
                  <div>
                    <div className="mb-2 flex items-center justify-between font-medium text-gray-800">
                      <p>Course Price</p>
                      <p>৳ {courseDetails.data.price}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-nad-teal/20 p-2 text-nad-teal">
                    <FiPhone />
                  </div>
                  <p>
                    Call if necessary{" "}
                    <span className="font-medium text-nad-teal">
                      +88 09638-100303
                    </span>{" "}
                    (Morning 10AM to Night 10PM)
                  </p>
                </div>
              </div>
            </div>
            {/* Right Section: Payment Methods */}
            <div className="order-2 h-fit w-full rounded-lg border-none shadow-[4px_11px_58px_rgba(0,0,0,0.07)] lg:w-[41%]">
              <PaymentBtn courseDetails={courseDetails?.data} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
