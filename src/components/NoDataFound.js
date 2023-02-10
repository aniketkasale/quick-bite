import image from "../assets/nodata.svg";

const NoDataFound = () => {
  return (
    <div>
      <img className="h-[76vh]" src={image} alt="No Data Found" />
    </div>
  );
};

export default NoDataFound;
