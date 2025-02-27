export const menuConfig = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Courses",
    path: "/all-courses",
    // submenu: [
    //   {
    //     name: "All Courses",
    //     path: "/all-courses",
    //   },
    // {
    //   name: "Course Details",
    //   path: "/course-details",
    // },
    // {
    //   name: "Course Lesson",
    //   path: "/course-lesson",
    // },
    // ],
  },
  {
    name: "বাংলায় শিখি",
    path: "/degrees",
  },
  {
    name: "Explore",
    submenu: [
      {
        name: "Plans & Pricing",
        path: "/pricing",
      },
      {
        name: "Prize Pool",
        path: "/prize-pool",
      },
      {
        name: "About Us",
        path: "/about-us",
      },
      {
        name: "Our Events",
        path: "/blockchain-webinar",
      },
      {
        name: "Blogs",
        path: "/blogs",
      },
      // {
      //   name: "Services",
      //   path: "/services",
      // },
      {
        name: "Contact Us",
        path: "/contact-us",
      },
    ],
  },
];
