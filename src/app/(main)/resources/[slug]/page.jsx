import { getResourcesForPublicUsers } from "@/api/services/resource/resourceService";
import Container from "@/components/ui/Container";
import { cookies } from "next/headers";
import React from "react";
import ShowResources from "./_components/ShowResources";

export const metadata = {
  title: "Resources - NonAcademy",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const ResourcesPage = async ({ params }) => {
  // Get the token from the cookies
  const token = cookies().get("nad_auth_token")?.value;

  // Fetch all resources by course id
  const resources = await getResourcesForPublicUsers(token, params.slug);

  return (
    <div className="bg-nad-primary-lite-1">
      <Container>
        <div className="text-nad-gray-9">
          <h3 className="mb-5 text-center text-xl font-bold text-nad-gray-9 md:mb-6 md:text-2xl md:tracking-tight">
            Resources
          </h3>
          {/* no login message */}
          {!token && (
            <div className="mb-4 rounded-lg border-l-4 border-yellow-800 bg-yellow-100 p-4 text-yellow-800">
              <p className="text-sm font-medium">
                Please login to get the resources
              </p>
            </div>
          )}

          {/* show resource */}
          {resources?.data?.length > 0 ? (
            <ShowResources modules={resources?.data} />
          ) : (
            <div className="h-full py-6 text-center text-xl font-semibold text-danger-1 md:py-20 md:text-3xl md:font-bold xl:py-10 2xl:py-20">
              No Resources Available
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ResourcesPage;
