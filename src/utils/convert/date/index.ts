const toBuddhism = (date: Date) => {
  const buddhismYear = date.getFullYear() + 543;
  const month = date.toLocaleString("default", { month: "short" });
  return `${date.getDate()} ${month} ${buddhismYear}`;
};

const toGregorian = (date: Date) => {
  const month = date.toLocaleString("default", { month: "short" });
  return `${date.getDate()} ${month} ${date.getFullYear()}`;
};

export { toBuddhism, toGregorian };
