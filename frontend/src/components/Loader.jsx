const Loader = ({ mutateButton = false }) => {
  const loaderSize = mutateButton ? "w-4 h-4" : "w-20 h-20";
  const borderWidth = mutateButton ? "border-2" : "border-4";

  return (
    <div
      className={`${loaderSize} ${borderWidth} border-gray-300 border-t-gray-900 rounded-full animate-spin`}
    ></div>
  );
};
export default Loader;
