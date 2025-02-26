import { getBlogDetails } from "@/api/services/blogs/blogService";
import Container from "@/components/ui/Container";
import HTMLReactParser from "html-react-parser";
import React from "react";

export async function generateMetadata({ params }) {
  const blogsDetails = await getBlogDetails(params.slug);
  return {
    title: `${blogsDetails?.data?.title} - NonAcademy`,
    description: "An online learning platform. your career building university",
  };
}

const BlogsDetailsPage = async ({ params }) => {
  const blogsDetails = await getBlogDetails(params.slug);

  return (
    <Container>
      <div>{HTMLReactParser(blogsDetails?.data?.content)}</div>
    </Container>
  );
};

export default BlogsDetailsPage;
