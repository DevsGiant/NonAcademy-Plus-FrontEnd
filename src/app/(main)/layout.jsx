import Footer from "@/components/Layouts/Main/Footer/Footer";
import Navbar from "@/components/Layouts/Main/Navbar/Navbar";
import { analytics } from "@/utils/gtag";

export default function MainLayout({ children }) {
  analytics.page("Main Layout Viewed");

  return (
    <>
      <Navbar />
      <div className="md:min-h-[50vh]">{children}</div>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5V9QHK8T"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Footer />
    </>
  );
}
