export const CustomPaginationButton = (_, type, originalElement) => {
  console.log(type, originalElement);
  if (type === "prev") {
    return (
      <a>
        <span>&lt;</span>Previous
      </a>
    );
  }
  if (type === "next") {
    return (
      <a>
        Next <span> &gt;</span>
      </a>
    ); // Use the ">" symbol directly
  }
  return originalElement;
};
