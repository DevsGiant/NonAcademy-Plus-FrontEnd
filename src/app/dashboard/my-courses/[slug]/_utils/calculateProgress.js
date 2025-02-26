// Calculate watching progress

export const calculateProgress = (modules, courseHistory) => {
  if (!modules || !courseHistory) {
    return 0;
  }

  let totalWatched = 0;
  let totalVideos = 0;

  for (let m = 0; m < modules?.length; m++) {
    if (modules?.[m]?.isPublic && modules?.[m]?.isEnabled)
      totalVideos += modules?.[m]?.videos?.length || 0;
  }

  for (let mod in courseHistory?.history) {
    totalWatched += Object.values(courseHistory?.history[mod])?.length || 0;
  }

  const percentage = Math.round((totalWatched / totalVideos || 1) * 100);
  return percentage > 100 ? 100 : percentage;
};
