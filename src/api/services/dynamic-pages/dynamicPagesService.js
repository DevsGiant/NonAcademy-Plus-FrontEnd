export const fetchDynamicPage = async (slug) => {
  try {
    const response = await fetch(`${process.env.API_URL}/pages/${slug}`, {
      cache: "no-cache",
      headers: {
        "source-origin": "nap",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch home data");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
