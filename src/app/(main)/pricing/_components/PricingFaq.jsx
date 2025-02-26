import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import { subscriptionFaqs } from "../../../../../public/data/subscription/subscription";

const PricingFaq = () => {
  return (
    <div className="bg-nad-primary-lite-1/70">
      <Container>
        <SectionTitle
          title="Frequently asked questions"
          subtitle="Subscription related Doubts"
        />
        <Accordion
          type="multiple"
          className="mt-6 w-full border border-stroke bg-white lg:mt-8"
        >
          {subscriptionFaqs?.map((faq, index) => (
            <AccordionItem
              key={faq._id}
              value={`item-${index + 1}`}
              className="border-b border-stroke last:border-b-0"
            >
              <AccordionTrigger className="bg-[#FCFCFC] p-4 text-left font-semibold md:p-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border-t border-stroke p-4 md:p-5 md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default PricingFaq;
