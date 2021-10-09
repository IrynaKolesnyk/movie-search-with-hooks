import Loader from "react-loader-spinner";
const Spinner = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={80}
      width={80}
      className="loader"
    />
  );
};

export default Spinner;
