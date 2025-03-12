import AuthProvider from "@/contexts/AuthProvider";
import DisableContextMenu from "@/contexts/DisableContextMenue";
import StoreProvider from "@/contexts/StoreProvider";
// import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
// import LoadPixel from "@/components/FacebookPixel/LoadPixel";
// import { analytics } from "@/utils/gtag";
// import NonAcademyOrganizationSchema from "@/schemas/OrganizationSchema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NonAcademy Plus",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};
// GTM-5V9QHK8T
// GTM-P98C7ZRJ updated gtm id
export default function RootLayout({ children }) {
  // analytics.page();

  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId="GTM-P98C7ZRJ" /> */}
      <body className={`${inter.className} text-sm md:text-base`}>
        {/* <NonAcademyOrganizationSchema /> */}
        {/* <LoadPixel /> */}
        <DisableContextMenu />
        <AuthProvider>
          <StoreProvider>
            <main className="md:min-h-[50vh]">{children}</main>
          </StoreProvider>
        </AuthProvider>
        <Toaster />
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P98C7ZRJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
      </body>
      {/* for google analytics */}
      {/* <GoogleAnalytics gaId="G-CPZZYF1BXJ" /> */}
    </html>
  );
}
