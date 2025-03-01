export const fetchHomeData = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/home`, {
      next: { revalidate: 30 },
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
