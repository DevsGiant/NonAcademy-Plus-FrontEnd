import Image from "next/image";
import assets from "../../public/images/images";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 text-center p-4 lg:p-10">
            <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8">
                <Image 
                    src={assets?.svgs?.notFound} 
                    alt="Not Found" 
                    layout="intrinsic" 
                    width={500} 
                    height={400} 
                />
                
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-9xl font-bold mb-4">
                    40<span className="text-[#47B5FF]">4</span>
                </h1>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                    Looks like you&apos;re lost
                </h3>
                <p className="text-base lg:text-lg text-gray-600 mb-4">
                    The page you are looking for is not available!
                </p>
                <Link href="/">
                    <button className="text-base lg:text-lg text-[#47B5FF] border border-[#47B5FF] px-4 lg:px-6 py-2 lg:py-3 rounded-sm hover:bg-[#47B5FF] hover:text-white transition duration-300">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
