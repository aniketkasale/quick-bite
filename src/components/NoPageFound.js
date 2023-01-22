import image from "../assets/pageNotFound.svg";
import { useRouteError } from "react-router-dom";

const NoPageFound = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="not-app-body">
      <div className="no-data">
        <img src={image} alt="Page Not Found" />
        <h2 className="router-err">{status + ":" + statusText}</h2>
      </div>
    </div>
  );
};

export default NoPageFound;
