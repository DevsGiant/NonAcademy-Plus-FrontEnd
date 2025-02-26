import React from "react";
import { OrganizationJsonLd } from "next-seo";

export default function NonAcademyOrganizationSchema() {
  return (
    <>
      <OrganizationJsonLd
        type="EducationalOrganization"
        id="https://nonacademy.net/#organization"
        logo="https://nonacademy.net/_next/static/media/logo-black.94924912.svg"
        legalName="NonAcademy"
        name="NonAcademy"
        address={{
          streetAddress: "30/1 CK Ghosh Road",
          addressLocality: "Mymensingh",
          postalCode: "2200", // Replace with the actual postal code if available
          addressCountry: "BD",
        }}
        contactPoint={[
          {
            telephone: "+88 09638-100303",
            contactType: "customer service",
            email: "hello@nonacademy.net",
            areaServed: "BD",
            availableLanguage: ["Bengali", "English"],
          },
        ]}
        sameAs={[
          "https://www.facebook.com/nonacademy.net/",
          // Add other social media profiles as needed
        ]}
        url="https://nonacademy.net/"
      />
    </>
  );
}
