export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export const formatTime = (dateString: string) => {
  return new Date(dateString)
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
};

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12 ) return "GOOD MORNING";
  if (hour < 17) return "GOOD AFTERNOON";
  if (hour < 20) return "GOOD EVENING";
  return "GOOD NIGHT";
};
