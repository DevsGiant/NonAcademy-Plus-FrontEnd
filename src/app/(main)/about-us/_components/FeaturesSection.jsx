import Image from "next/image";
import assets from "../../../../../public/images/images";

const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "Why Choose NonAcademy Plus",
      description:
        "NonAcademy Plus offers comprehensive academic preparation programs designed specifically for SSC, HSC, and Olympiad students in Bangladesh. Our platform combines expert instruction with innovative learning technologies to provide a structured educational experience. We prioritize clear concept building, targeted exam preparation, and personalized learning paths that adapt to each student's strengths and weaknesses, ensuring optimal academic outcomes.",
    },
    {
      number: "02",
      title: "Our Mission",
      description:
        "Our mission is to make quality education accessible to all Bangladeshi students regardless of location or resources. We strive to empower learners with the knowledge, skills, and confidence they need to excel in their academic pursuits. By combining traditional teaching excellence with modern educational technology, we aim to transform how students prepare for critical examinations and build their academic foundations.",
    },
    {
      number: "03",
      title: "Our Vision",
      description:
        "We envision a future where every student in Bangladesh has the opportunity to reach their full academic potential through personalized, high-quality education. NonAcademy Plus aims to be the leading educational platform in Bangladesh, nurturing the next generation of scholars, professionals, and leaders who will contribute to the nation's progress and development. Our commitment to educational excellence drives everything we do.",
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
          <h2 className="text-center text-xl font-bold text-white md:text-2xl lg:px-72">
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
              <p className="text-justify text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
