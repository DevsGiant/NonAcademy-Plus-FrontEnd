import books from "../images/study-resources/books.webp";
import note from "../images/study-resources/note.webp";
import solution from "../images/study-resources/solution.webp";

export const studyResources = [
  {
    id: 1,
    title: "Notes",
    description:
      "Use Physics Wallah’s detailed study materials that simplify complex ideas into easily understandable language",
    image: note,
    default_color: "#f1faff",
    hover_color: "#daf2ff",
  },
  {
    id: 2,
    title: "Reference Books",
    description:
      "Our experts have created thorough study materials that break down complicated concepts into easily understandable content",
    image: books,
    default_color: "#fff9ee",
    hover_color: "#ffefd2",
  },
  {
    id: 3,
    title: "NCERT Solutions",
    description:
      "Unlock academic excellence with Physics Wallah’s  NCERT Solutions which provides you step-by-step solutions",
    image: solution,
    default_color: "#e8fff6",
    hover_color: "#d3ffee",
  },
];
