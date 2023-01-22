import image from "../assets/nodata.svg";

const NoDataFound = () => {
  return (
    <div className="no-data">
      <img src={image} alt="No Data Found" />
    </div>
  );
};

export default NoDataFound;
