import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import { homeFaqs } from "../../../../../public/data/homeFaq";

const HomeFaq = () => {
  return (
    <Container>
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Find answers to common queries about our platform, services, and features."
      />

      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-5 w-full border border-stroke bg-white sm:w-[80%] lg:mt-9 lg:w-[70%]"
      >
        {homeFaqs?.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="border-b border-stroke last:border-b-0"
          >
            <AccordionTrigger className="p-4 text-left font-medium text-nad-gray-7 md:p-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="border-t border-stroke p-4 leading-6 text-gray-800 md:p-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default HomeFaq;
