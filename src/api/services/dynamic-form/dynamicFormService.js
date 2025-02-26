export const fetchDynamicForm = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/student/form/${slug}`,
      {
        cache: "no-cache",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch form");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
