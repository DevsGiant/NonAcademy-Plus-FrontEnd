import { fetchDynamicForm } from "@/api/services/dynamic-form/dynamicFormService";
import Container from "@/components/ui/Container";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import React from "react";
import DynamicForm from "./_components/DynamicForm";

export async function generateMetadata({ params }) {
  const dynamicForm = await fetchDynamicForm(params?.slug);
  return {
    title: `${dynamicForm?.data?.form?.title} - NonAcademy`,
    description: "An online learning platform. Your career-building university",
  };
}

const DynamicFormPage = async ({ params }) => {
  const dynamicForm = await fetchDynamicForm(params?.slug);
  // extract form data
  const {
    banner,
    title,
    description,
    multiSubmission,
    isLoginRequired,
    contents,
    _id,
    slug,
  } = dynamicForm?.data?.form;

  return (
    <div className="bg-nad-primary-lite-1">
      {/* Banner section */}
      {banner && (
        <div className="mx-auto w-full max-w-7xl px-4 pt-4 md:px-5 lg:px-6 lg:pt-6 xl:px-4">
          <Image
            src={banner}
            alt={title}
            className="h-auto max-w-full rounded-lg"
            width={2000}
            height={1000}
            priority
          />
        </div>
      )}

      <Container className="!pt-4 lg:!pt-6">
        {/* title & description */}
        <div className="text-center">
          {title && (
            <h2 className="mb-2 text-xl font-semibold text-nad-title md:text-2xl md:font-bold lg:mb-3 lg:text-3xl">
              {title}
            </h2>
          )}
          {description && <div>{HTMLReactParser(description)}</div>}
        </div>

        {/* dynamic form part */}
        <div className="mx-auto mt-5 w-full sm:w-[80%] md:mt-6 md:w-[60%] lg:w-[50%]">
          <DynamicForm
            contents={contents}
            multiSubmission={multiSubmission}
            isLoginRequired={isLoginRequired}
            formId={_id}
            slug={slug}
            allResponses={dynamicForm?.data?.allResponses}
          />
        </div>
      </Container>
    </div>
  );
};

export default DynamicFormPage;
