export const getCourses = async () => {
  try {
    // TODO: change api for pagination removed limit
    const response = await fetch(
      `${process.env.API_URL}/courses?limit=100&page=1`,
      {
        next: { revalidate: 30 },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return null;
  }
};

export const getCourseDetails = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/courses/slug/${slug}`,
      {
        cache: "no-cache",
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch course details for ID: ${slug}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching course details for ID ${slug}:`, error);
    return null;
  }
};
