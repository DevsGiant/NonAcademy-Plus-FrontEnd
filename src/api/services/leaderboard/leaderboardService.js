// Get leaderboard by course wise
export const getLeaderboardByCourseId = async (token, courseId) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/assignments/update-leaderboard/${courseId}?limit=20`,
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
      throw new Error("Failed to fetch course leaderboard");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching course leaderboard:", err);
    throw new Error("Failed to fetch course leaderboard");
  }
};
