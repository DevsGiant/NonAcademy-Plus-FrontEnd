export const getBlogs = async () => {
  try {
    // TODO: change api for pagination removed limit
    const response = await fetch(
      `${process.env.API_URL}/blogs?limit=100&page=1`,
      {
        cache: "no-cache",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};

export const getBlogDetails = async (slug) => {
  try {
    const response = await fetch(`${process.env.API_URL}/blogs/${slug}`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Blog details for ID: ${slug}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching Blog details for ID ${slug}:`, error);
    return null;
  }
};
