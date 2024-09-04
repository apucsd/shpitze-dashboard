export const CustomPaginationButton = (_, type, originalElement) => {
  console.log(type, originalElement);
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};
