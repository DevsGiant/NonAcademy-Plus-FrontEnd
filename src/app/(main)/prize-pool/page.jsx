import Container from "@/components/ui/Container";
import React from "react";
import PrizePoolView from "./_components/PrizePoolView";

export const metadata = {
  title: "Prize Pool - NonAcademy",
  description: "An online learning platform. Your career-building university",
};

const PrizePoolPage = () => {
  return (
    <div className="bg-nad-primary-lite-1/70 md:min-h-[50vh]">
      <Container>
        <PrizePoolView />
      </Container>
    </div>
  );
};

export default PrizePoolPage;
