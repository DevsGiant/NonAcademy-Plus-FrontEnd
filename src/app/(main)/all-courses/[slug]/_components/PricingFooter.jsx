import PageContainer from "@/components/ui/PageContainer";
import React from "react";
import { GoCheck, GoX } from "react-icons/go";

const PricingFooter = () => {
  // TODO: static data removed
  return (
    <div className="hidden bg-gray-100 text-sm font-medium text-gray-700 sm:block">
      <PageContainer>
        <div className="grid grid-cols-3">
          <div className="mr-3">
            Upgrade to a Pro account and unlock more courses for accelerated
            learning. Instant feedback, interactive learning and more.
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Free</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-x-2">
                <GoX />
                <p>100+ coding courses</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoX />
                <p>Certificate of completion</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoX />
                <p>Hands-on practice</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoX />
                <p>24x7 doubt solving with AI</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoX />
                <p>100+ projects to practice</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoX />
                <p>In-depth project feedback</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoX />
                <p>AWS cloud sandboxes</p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Pro</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-x-2">
                <GoCheck />
                <p>100+ coding courses</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoCheck />
                <p>Certificate of completion</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoCheck />
                <p>Hands-on practice</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoCheck />
                <p>24x7 doubt solving with AI</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoCheck />
                <p>100+ projects to practice</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoCheck />
                <p>In-depth project feedback</p>
              </div>
              <div className="flex items-center gap-x-2">
                <GoCheck />
                <p>AWS cloud sandboxes</p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default PricingFooter;
