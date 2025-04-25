// Calculate watching progress
export const calculateProgress = (modules, courseHistory) => {
  if (!modules || !courseHistory?.history) return 0;

  let totalVideos = 0;
  let totalWatched = 0;

  // Count total videos in enabled & public modules
  modules.forEach((module) => {
    if (module.isPublic && module.isEnabled) {
      totalVideos += module.videos?.length || 0;
    }
  });

  // Count total watched videos
  Object.values(courseHistory.history).forEach((videoList) => {
    totalWatched += Object.keys(videoList).length;
  });

  // Return 0 if no videos exist or nothing is watched
  if (totalVideos === 0 || totalWatched === 0) return 0;

  // Calculate progress percentage
  const percentage = Math.round((totalWatched / totalVideos) * 100);
  return Math.min(percentage, 100); // Ensure it never exceeds 100%
};
