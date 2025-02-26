import { getBlogs } from "@/api/services/blogs/blogService";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";
import FailedUI from "@/components/ui/FailedUI";
import { formatDate } from "@/utils/formateDate";
import { analytics } from "@/utils/gtag";
import Image from "next/image";
import Link from "next/link";
import assets from "../../../../public/images/images";

export const metadata = {
  title: "Blogs - NonAcademy",
  description: "An online learning platform. your career building university",
};

const BlogsPage = async () => {
  const blogs = await getBlogs();
  analytics.page();
  analytics.track("Blogs Page Viewed");

  return (
    <div className="bg-[#F9FCFF]">
      {/* Banner */}
      <Container>
        <section className="grid grid-cols-1 items-center justify-items-center md:grid-cols-2 md:justify-items-start">
          <div>
            <h1 className="text-center text-2xl font-bold text-nad-title md:text-left md:text-4xl lg:text-[40px] lg:leading-[55px] xl:text-[55px] xl:leading-tight">
              Read The Most{" "}
              <span className="text-nad-primary">Interesting</span> Articles
            </h1>
            <p className="w-full pt-4 text-center text-gray-800 md:w-[70%] md:text-start lg:pt-8">
              Our blog is the best place to learn about the latest trends in the
              tech industry. Stay up-to-date with the latest news, tips, and
              insights from our team of experts.
            </p>
          </div>
          <div className="hidden md:block">
            <Image src={assets?.svgs?.blogBanner} alt="Blogs" />
          </div>
        </section>
      </Container>

      {!blogs && <FailedUI />}
      {/* Blogs Card */}
      <Container className="md:!pt-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {blogs?.data?.blogs?.map((blog) => (
            <Link
              href={`/blogs/${blog._id}`}
              key={blog._id}
              className="rounded-lg border p-4 shadow-lg"
            >
              <Image
                src={blog?.imageUrl}
                alt={blog?.title}
                className="mb-4 h-48 w-full rounded-lg object-cover"
                width={300}
                height={200}
              />
              <h2 className="mb-2 text-xl font-bold">{blog?.title}</h2>
              <p className="mb-2 text-gray-700">
                {blog?.shortDescription?.length > 80
                  ? `${blog?.shortDescription?.slice(0, 80)}...`
                  : blog?.shortDescription}
              </p>
              <p className="mb-2 text-sm text-gray-500">
                By {blog?.author} on {formatDate(blog?.updatedAt)}
              </p>
              <div className="flex flex-wrap gap-2">
                {blog?.tags?.map((tag) => (
                  <Badge
                    key={tag._id}
                    className="rounded bg-nad-logo text-white"
                  >
                    {tag.label}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogsPage;
