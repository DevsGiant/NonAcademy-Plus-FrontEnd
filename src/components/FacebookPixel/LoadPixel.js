// "use client";
// import React, { useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";

// const LoadPixel = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;

//   useEffect(() => {
//     import("react-facebook-pixel")
//       .then((x) => x.default)
//       .then((ReactPixel) => {
//         ReactPixel.init(pixelId);
//         ReactPixel.pageView();
//       });
//   }, [pathname, searchParams]);

//   return null;
// };

// export default LoadPixel;
