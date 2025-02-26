import Image from "next/image";
import assets from "../../../../../public/images/images";

const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "Why Choose NonAcademy",
      description:
        "NonAcademy offers cutting-edge blockchain courses, designed to give you hands-on experience and real-world skills. Our platform is tailored for both beginners and experts, ensuring you get the knowledge you need to succeed in the rapidly evolving tech world.",
    },
    {
      number: "02",
      title: "Our Mission",
      description:
        "Our mission is to make blockchain development accessible to everyone. We strive to empower developers with the tools, knowledge, and support they need to create innovative solutions and advance their careers in the blockchain space.",
    },
    {
      number: "03",
      title: "Our Vision",
      description:
        "We envision a future where blockchain technology is integrated into every aspect of digital life. NonAcademy aims to be the leading platform in blockchain education, nurturing the next generation of blockchain experts who will shape the future.",
    },
  ];

  return (
    <section className="bg-nad-primary py-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <Image
            src={assets?.images?.celebration} // Replace with your icon path or import it if needed
            alt="Icon"
            className="mx-auto mb-4 w-[10%]"
          />
          <h2 className="text-center text-2xl font-bold text-white lg:px-72">
            Unlimited access to 7,000+ world-class courses, hands-on projects,
            and job-ready certificates
          </h2>
        </div>
        <div className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              <h2 className="mb-4 text-center text-6xl font-bold text-white">
                {feature.number}
              </h2>
              <h3 className="mb-2 text-center text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-center text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
