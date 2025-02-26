// Get all assignments by course wise
export const getAssignmentsByCourseId = async (token, courseId) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/assignments/course/${courseId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch course assignments");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching course assignments:", err);
    throw new Error("Failed to fetch course assignments");
  }
};

// Get a single assignment by assignment id
export const getAssignmentById = async (token, assignmentId) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/assignments/assignment/${assignmentId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch single assignment");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single assignment:", error);
    throw new Error("Failed to fetch single assignment");
  }
};
