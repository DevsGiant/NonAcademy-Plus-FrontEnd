// Get all resources for enrolled students
export const getResources = async (token, courseId) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/courses/${courseId}/resources`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "source-origin": "nap",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch resources");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching resources:", err);
    throw new Error("Failed to fetch resources");
  }
};

// Get all resources for enrolled students
export const getResourcesForPublicUsers = async (token, courseId) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/courses/resources/${courseId}`,
      {
        next: {
          revalidate: 30,
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "source-origin": "nap",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch resources");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching resources:", err);
    throw new Error("Failed to fetch resources");
  }
};
