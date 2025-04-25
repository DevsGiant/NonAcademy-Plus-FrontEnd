/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // dev backend url
    // API_URL: "http://localhost:5000/api",
    // API_URL: "https://nonacademy.mainulhasan05.xyz/api",
    API_URL: "https://na-api.nonacademy.net/api",
    API_URL_V2: "https://arif3.com/api",
    // NEXT_PUBLIC_PIXEL_ID: "840544851499439",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
