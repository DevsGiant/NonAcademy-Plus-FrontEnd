import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import { chooseUsData } from "../../../../../public/data/chooseUs";
import Counter from "./Counter";
import "./whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="bg-nad-primary-lite-1/70">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="Choose us for personalized excellence and 24/7 dedicated support"
        />
        <div className="hanger-line mt-4 w-full lg:mt-8">
          {chooseUsData?.map((item, index) => (
            <div
              key={item.id}
              className={`hanger-card ${index % 2 !== 0 ? "mrgt-large" : ""}`}
            >
              <div className="nad-counterup border-bottom-gradient">
                <div className="top-circle-shape"></div>
                <div>
                  <div className="counter-image">
                    <Image
                      className="h-auto max-w-full"
                      src={item.image}
                      alt="counter"
                    />
                  </div>
                  <div>
                    {/* counting numbers */}
                    <Counter counter={item.counter} />
                    <span className="counter-subtitle">{item.subtitle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
