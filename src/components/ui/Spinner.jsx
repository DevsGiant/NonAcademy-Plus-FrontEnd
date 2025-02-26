import Image from "next/image";
import assets from "../../../public/images/images";

const Spinner = () => {
  return (
    <div className="flex h-[75vh] items-center justify-center">
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Spinner */}
        <div className="absolute h-24 w-24 animate-spin rounded-full border-t-4 border-solid border-[#1041FF]"></div>
        {/* Centered Image */}
        <Image
          src={assets?.images?.loader}
          alt="Loading"
          className="absolute h-12 w-12 rounded-full "
        />
      </div>
    </div>
  );
};

export default Spinner;
