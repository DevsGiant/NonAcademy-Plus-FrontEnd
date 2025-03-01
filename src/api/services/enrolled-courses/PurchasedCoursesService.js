// Get all enrolled courses
export const getEnrolledCourses = async (token) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/courses/single-student`,
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
      throw new Error("Failed to fetch enrolled courses");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching enrolled courses:", err);
    throw new Error("Failed to fetch enrolled courses");
  }
};

// Get a single enrolled course by ID
export const getEnrolledCourseById = async (token, courseId) => {
  try {
    const response = await fetch(`${process.env.API_URL}/courses/${courseId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "source-origin": "nap",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch course details");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw new Error("Failed to fetch course details");
  }
};

// Get a single enrolled course by ID
export const getAnnouncementByCourseId = async (
  token,
  courseId,
  currentPage = 1,
  limit = 1000,
) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/admin/announcement/student/${courseId}?currentPage=${currentPage}&limit=${limit}`,
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
      throw new Error("Failed to fetch announcements");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching announcements:", error);
    throw new Error("Failed to fetch announcements");
  }
};
