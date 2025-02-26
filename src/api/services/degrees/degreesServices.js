export const getAllDegrees = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/student/degree`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching degrees:", error);
    return null;
  }
};

export const getSingleDegreeById = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/student/degree/single/${slug}`,
      {
        cache: "no-cache",
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch degree details for ID: ${slug}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching course details for ID ${slug}:`, error);
    return null;
  }
};

export const getDegreeLessonsByLessonId = async (singleLessonSlug) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/student/degree/lesson/${singleLessonSlug}`,
      {
        cache: "no-cache",
      },
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch degree lesson for ID: ${singleLessonSlug}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      `Error fetching course details for ID ${singleLessonSlug}:`,
      error,
    );
    throw new Error("Failed to fetch degree details");
  }
};
