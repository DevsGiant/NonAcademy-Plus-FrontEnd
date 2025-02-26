import profile from "../images/courses/arif.jpg";
import course1 from "../images/courses/course-1.webp";
import course2 from "../images/courses/course-2.webp";
import course3 from "../images/courses/course-3.webp";
import course4 from "../images/courses/course-4.webp";
import course5 from "../images/courses/course-5.webp";
import course6 from "../images/courses/course-6.webp";

export const coursesData = [
  {
    id: "pekasdfdsdfa73",
    name: "Learn JavaScript Basics",
    image: course1,
    price: 999,
    discount: 50,
    description:
      "JavaScript is the most important technology to learn as a web developer. This is a foundational interactive course in order to start learning JavaScript.",
    instructor: "AI Arif",
    instructorImage: profile,
    courseOutcomes: [
      "Go from a total beginner to someone who understands JavaScript",
      "Programming fundamentals: variables, conditionals, data structures",
      "ES6+ JavaScript syntax",
      "Practice your new skills with coding challenges",
    ],
    courseStructure: {
      lectures: 51,
      totalDuration: { hours: 4, minutes: 12 },
      lessons: [
        {
          id: "askdflj59",
          title: "Introduction To JavaScript",
          time: 40,
          lectures: 11,
          topics: [
            {
              id: "oaisdfjd74",
              name: "Course Introduction",
              time: 1,
            },
            {
              id: "taisdfjd75",
              name: "Variables",
              time: 5,
            },
            {
              id: "kaisdfjd76",
              name: "Quiz",
              time: 10,
            },
          ],
        },
        {
          id: "lasikdfj72",
          title: "Language Fundamentals",
          time: 54,
          lectures: 21,
          topics: [
            {
              id: "alskdfj56",
              name: "Math operators",
              time: 5,
            },
            {
              id: "lksjadf411",
              name: "console.log and Chrome DevTools",
              time: 12,
            },
            {
              id: "l;askdfjga91",
              name: "Logical Operators ",
              time: 17,
            },
          ],
        },
        {
          id: "alsdkfjas37",
          title: "Document Object Model (DOM)",
          time: 22,
          lectures: 8,
          topics: [
            {
              id: "aslfgjasd55",
              name: "document.querySelector",
              time: 12,
            },
            {
              id: "lasjdhf77",
              name: "Introduction to event listeners ",
              time: 3,
            },
            {
              id: "asudfdf33",
              name: "More on traversing DOM ",
              time: 7,
            },
          ],
        },
      ],
    },
    courseAbout:
      "JavaScript is the obvious next step once you learn HTML and CSS. However, it is super important to learn JavaScript by practicing and fun exercises along the way. This course does exactly that. You will be introduced to core JavaScript concepts and would be allowed to practice them as we progress with the course.",
    reviews: [
      {
        id: "uaksdjf30",
        name: "Atikur Rahman",
        image: profile,
        date: "05-31-2024",
        ratings: 5,
        comment:
          "This course helped me to get the solid understanding of basics of js.",
      },
      {
        id: "alskdfj84",
        name: "Venkatesh Veerala",
        image: profile,
        date: "03-18-2024",
        ratings: 4.5,
        comment: "better",
      },
      {
        id: "iuasdikf20",
        name: "Swaraj Upadhyay",
        image: profile,
        date: "02-14-2024",
        ratings: 4,
        comment: "Very Good course for Beginners!!!",
      },
    ],
  },
  {
    id: "rfdsafdsaf783",
    name: "Master Python Programming",
    image: course2,
    price: 1199,
    discount: 40,
    description:
      "Python is a powerful, versatile language used in web development, data analysis, and more. This course will take you from beginner to advanced in Python.",
    instructor: "Jane Doe",
    instructorImage: profile,
    courseOutcomes: [
      "Understand Python syntax and semantics",
      "Build scripts and applications",
      "Work with data structures and algorithms",
      "Automate tasks using Python",
    ],
    courseStructure: {
      lectures: 65,
      totalDuration: { hours: 35, minutes: 0 },
      lessons: [
        {
          id: "qwerty159",
          title: "Getting Started with Python",
          time: 45,
          lectures: 10,
          topics: [
            {
              id: "asdfghjkl1",
              name: "Introduction to Python",
              time: 5,
            },
            {
              id: "zxcvbnm2",
              name: "Setting up the Environment",
              time: 10,
            },
            {
              id: "lkjhgfd3",
              name: "Your First Program",
              time: 20,
            },
          ],
        },
        {
          id: "qazwsxedc4",
          title: "Data Types and Structures",
          time: 60,
          lectures: 15,
          topics: [
            {
              id: "plmoknijb5",
              name: "Numbers and Strings",
              time: 15,
            },
            {
              id: "uhbygv6",
              name: "Lists and Tuples",
              time: 20,
            },
            {
              id: "tgbvfr7",
              name: "Dictionaries and Sets",
              time: 25,
            },
          ],
        },
        {
          id: "edcrfv8",
          title: "Advanced Python Concepts",
          time: 50,
          lectures: 12,
          topics: [
            {
              id: "rfvtgb9",
              name: "Object-Oriented Programming",
              time: 25,
            },
            {
              id: "plokm098",
              name: "Decorators and Generators",
              time: 15,
            },
            {
              id: "bhynujm0",
              name: "Concurrency",
              time: 10,
            },
          ],
        },
      ],
    },
    courseAbout:
      "This course is designed to take you through the basics of Python programming and gradually introduce you to advanced concepts, allowing you to build a strong foundation and develop real-world projects.",
    reviews: [
      {
        id: "rewtyu10",
        name: "John Smith",
        image: profile,
        date: "01-05-2024",
        ratings: 4.8,
        comment:
          "A comprehensive course that covers all the essentials and more. Highly recommended!",
      },
      {
        id: "asdfgtyu11",
        name: "Emily Johnson",
        image: profile,
        date: "03-22-2024",
        ratings: 4.7,
        comment: "Great course, very thorough and well explained.",
      },
      {
        id: "qwertuio12",
        name: "Michael Brown",
        image: profile,
        date: "04-15-2024",
        ratings: 4.6,
        comment: "Helped me advance my career in data science.",
      },
    ],
  },
  {
    id: "cdeasdf789",
    name: "Introduction to React",
    image: course3,
    price: 1099,
    discount: 30,
    description:
      "Learn React, the popular JavaScript library for building user interfaces. This course covers the fundamentals and advanced concepts of React.",
    instructor: "John Doe",
    instructorImage: profile,
    courseOutcomes: [
      "Build dynamic web applications using React",
      "Understand React components and lifecycle",
      "Manage application state with Redux",
      "Deploy React applications",
    ],
    courseStructure: {
      lectures: 48,
      totalDuration: { hours: 40, minutes: 30 },
      lessons: [
        {
          id: "asdf2345",
          title: "React Basics",
          time: 50,
          lectures: 14,
          topics: [
            {
              id: "asdf1234",
              name: "Introduction to React",
              time: 10,
            },
            {
              id: "qwer5678",
              name: "JSX and Components",
              time: 20,
            },
            {
              id: "zxcv6789",
              name: "Props and State",
              time: 20,
            },
          ],
        },
        {
          id: "ghjk1234",
          title: "Advanced React",
          time: 60,
          lectures: 20,
          topics: [
            {
              id: "tyui7890",
              name: "Hooks",
              time: 20,
            },
            {
              id: "bnmv1234",
              name: "Context API",
              time: 20,
            },
            {
              id: "ghjk6789",
              name: "React Router",
              time: 20,
            },
          ],
        },
        {
          id: "asdf5678",
          title: "State Management with Redux",
          time: 70,
          lectures: 14,
          topics: [
            {
              id: "zxcv1234",
              name: "Redux Basics",
              time: 30,
            },
            {
              id: "qwer7890",
              name: "Actions and Reducers",
              time: 20,
            },
            {
              id: "tyui5678",
              name: "Middleware",
              time: 20,
            },
          ],
        },
      ],
    },
    courseAbout:
      "This course is perfect for developers looking to build modern, efficient, and scalable web applications using React. You will start with the basics and progress to advanced concepts, ensuring a thorough understanding of the library.",
    reviews: [
      {
        id: "asdfg1234",
        name: "Sarah Williams",
        image: profile,
        date: "02-25-2024",
        ratings: 5,
        comment: "Excellent course, very detailed and easy to follow.",
      },
      {
        id: "zxcv4567",
        name: "James Anderson",
        image: profile,
        date: "04-18-2024",
        ratings: 4.9,
        comment: "Best React course I've taken so far!",
      },
      {
        id: "qwert0987",
        name: "Patricia Davis",
        image: profile,
        date: "05-12-2024",
        ratings: 4.8,
        comment: "Highly recommend for anyone wanting to learn React.",
      },
    ],
  },
  {
    id: "jkllmnb567",
    name: "Advanced CSS and Sass",
    image: course4,
    price: 899,
    discount: 25,
    description:
      "Take your CSS skills to the next level by learning advanced concepts and techniques with Sass. This course is perfect for developers looking to create stunning, responsive web designs.",
    instructor: "Emily Smith",
    instructorImage: profile,
    courseOutcomes: [
      "Master advanced CSS techniques",
      "Build responsive layouts with Flexbox and Grid",
      "Utilize Sass for efficient styling",
      "Create animations and transitions",
    ],
    courseStructure: {
      lectures: 36,
      totalDuration: { hours: 25, minutes: 45 },
      lessons: [
        {
          id: "asdfgh567",
          title: "Advanced CSS Concepts",
          time: 40,
          lectures: 10,
          topics: [
            {
              id: "zxcvbn123",
              name: "CSS Variables",
              time: 15,
            },
            {
              id: "qwerty789",
              name: "Flexbox",
              time: 15,
            },
            {
              id: "asdfgh456",
              name: "CSS Grid",
              time: 10,
            },
          ],
        },
        {
          id: "zxcvbn456",
          title: "Sass Basics",
          time: 50,
          lectures: 12,
          topics: [
            {
              id: "qwerty123",
              name: "Introduction to Sass",
              time: 10,
            },
            {
              id: "asdfgh789",
              name: "Nesting and Partials",
              time: 20,
            },
            {
              id: "zxcvbn678",
              name: "Mixins and Functions",
              time: 20,
            },
          ],
        },
        {
          id: "qwerty567",
          title: "Animations and Transitions",
          time: 35,
          lectures: 8,
          topics: [
            {
              id: "asdfgh234",
              name: "CSS Transitions",
              time: 10,
            },
            {
              id: "zxcvbn345",
              name: "CSS Animations",
              time: 15,
            },
            {
              id: "qwerty678",
              name: "Keyframes",
              time: 10,
            },
          ],
        },
      ],
    },
    courseAbout:
      "This course will help you become a CSS expert by teaching you advanced techniques and how to use Sass to streamline your styling process. You'll also learn how to create engaging animations and transitions.",
    reviews: [
      {
        id: "qwert3456",
        name: "Anna Martinez",
        image: profile,
        date: "01-30-2024",
        ratings: 4.9,
        comment:
          "Loved the course! The instructor explains everything clearly and the examples are very practical.",
      },
      {
        id: "asdfg5678",
        name: "David Wilson",
        image: profile,
        date: "03-10-2024",
        ratings: 4.8,
        comment:
          "Great course, highly recommend for those wanting to level up their CSS skills.",
      },
      {
        id: "zxcvb7890",
        name: "Chris Thompson",
        image: profile,
        date: "04-25-2024",
        ratings: 4.7,
        comment: "Very informative and well-structured course.",
      },
    ],
  },
  {
    id: "qwerty123",
    name: "Full Stack Web Development",
    image: course5,
    price: 1499,
    discount: 35,
    description:
      "Become a full stack web developer by learning both front-end and back-end technologies. This course covers everything you need to know to build and deploy web applications.",
    instructor: "Michael Johnson",
    instructorImage: profile,
    courseOutcomes: [
      "Build and deploy full stack web applications",
      "Understand front-end technologies (HTML, CSS, JavaScript)",
      "Master back-end development with Node.js and Express",
      "Work with databases using MongoDB",
    ],
    courseStructure: {
      lectures: 80,
      totalDuration: { hours: 50, minutes: 30 },
      lessons: [
        {
          id: "asdf12345",
          title: "Front-End Development",
          time: 70,
          lectures: 25,
          topics: [
            {
              id: "zxcv56789",
              name: "HTML and CSS Basics",
              time: 20,
            },
            {
              id: "qwert09876",
              name: "JavaScript Essentials",
              time: 30,
            },
            {
              id: "asdf65432",
              name: "Building Interactive UI",
              time: 20,
            },
          ],
        },
        {
          id: "ghjk09876",
          title: "Back-End Development",
          time: 100,
          lectures: 35,
          topics: [
            {
              id: "tyui76543",
              name: "Node.js Basics",
              time: 30,
            },
            {
              id: "bnmv54321",
              name: "Express Framework",
              time: 40,
            },
            {
              id: "ghjk98765",
              name: "RESTful APIs",
              time: 30,
            },
          ],
        },
        {
          id: "asdf76543",
          title: "Database Management",
          time: 80,
          lectures: 20,
          topics: [
            {
              id: "zxcv54321",
              name: "Introduction to MongoDB",
              time: 20,
            },
            {
              id: "qwert65432",
              name: "CRUD Operations",
              time: 30,
            },
            {
              id: "asdf87654",
              name: "Data Modeling",
              time: 30,
            },
          ],
        },
      ],
    },
    courseAbout:
      "This course is designed for those who want to become proficient in both front-end and back-end web development. You'll learn how to build, deploy, and manage web applications from scratch.",
    reviews: [
      {
        id: "asdf12345",
        name: "Laura Lee",
        image: profile,
        date: "02-10-2024",
        ratings: 4.8,
        comment: "The best full stack course out there. Learned so much!",
      },
      {
        id: "zxcv98765",
        name: "Robert Green",
        image: profile,
        date: "03-20-2024",
        ratings: 4.9,
        comment: "Comprehensive and well-structured. Highly recommend.",
      },
      {
        id: "qwert56789",
        name: "Linda Brown",
        image: profile,
        date: "04-05-2024",
        ratings: 4.7,
        comment: "Excellent course, covers all the necessary topics.",
      },
    ],
  },
  {
    id: "lkjhg09876",
    name: "Data Science with Python",
    image: course6,
    price: 1399,
    discount: 20,
    description:
      "Dive into data science with Python. This course will teach you the essential techniques and tools to analyze and visualize data.",
    instructor: "Andrew Miller",
    instructorImage: profile,
    courseOutcomes: [
      "Understand data analysis and visualization",
      "Work with libraries like NumPy, Pandas, and Matplotlib",
      "Build machine learning models",
      "Implement real-world data science projects",
    ],
    courseStructure: {
      lectures: 55,
      totalDuration: { hours: 45, minutes: 15 },
      lessons: [
        {
          id: "qazwsxedc",
          title: "Introduction to Data Science",
          time: 60,
          lectures: 15,
          topics: [
            {
              id: "plmoknijb",
              name: "Data Science Overview",
              time: 10,
            },
            {
              id: "uhbygv6",
              name: "Setting up the Environment",
              time: 20,
            },
            {
              id: "tgbvfr7",
              name: "Basic Python for Data Science",
              time: 30,
            },
          ],
        },
        {
          id: "edcrfv8",
          title: "Data Analysis and Visualization",
          time: 90,
          lectures: 20,
          topics: [
            {
              id: "rfvtgb9",
              name: "NumPy Basics",
              time: 30,
            },
            {
              id: "plokm098",
              name: "Pandas for Data Manipulation",
              time: 30,
            },
            {
              id: "bhynujm0",
              name: "Data Visualization with Matplotlib",
              time: 30,
            },
          ],
        },
        {
          id: "lkjhg234",
          title: "Machine Learning",
          time: 120,
          lectures: 20,
          topics: [
            {
              id: "zxcvb234",
              name: "Introduction to Machine Learning",
              time: 40,
            },
            {
              id: "werty5678",
              name: "Supervised Learning",
              time: 40,
            },
            {
              id: "asdf1234",
              name: "Unsupervised Learning",
              time: 40,
            },
          ],
        },
      ],
    },
    courseAbout:
      "This course is perfect for aspiring data scientists. You'll learn how to analyze and visualize data, as well as build machine learning models using Python.",
    reviews: [
      {
        id: "plmoknijb",
        name: "Jessica White",
        image: profile,
        date: "01-15-2024",
        ratings: 4.7,
        comment: "Amazing course, very detailed and well-explained.",
      },
      {
        id: "rfvtgb5678",
        name: "William Clark",
        image: profile,
        date: "02-25-2024",
        ratings: 4.8,
        comment: "Highly recommend for anyone interested in data science.",
      },
      {
        id: "plokm8765",
        name: "Amanda Wilson",
        image: profile,
        date: "03-18-2024",
        ratings: 4.9,
        comment: "Excellent course with practical examples.",
      },
    ],
  },
];

export const studentFeedbackData = [
  { id: "asdf1", percentage: 75, rating: 5 },
  { id: "asdf2", percentage: 19, rating: 4 },
  { id: "asdf3", percentage: 4, rating: 3 },
  { id: "asdf4", percentage: 1, rating: 2 },
  { id: "asdf5", percentage: 1, rating: 1 },
];
