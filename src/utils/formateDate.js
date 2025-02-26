export const formatDate = (dateString, isShort = false) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const shortMonth = date.toLocaleString("default", { month: "short" });
  const fullMonth = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return isShort
    ? `${day} ${shortMonth} ${year}`
    : `${day}-${fullMonth}-${year}`;
};

export const formatDateAndTime = (dateString, page) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
