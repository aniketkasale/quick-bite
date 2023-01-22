import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { IMG_CDN_URL } from "../config";

const ItemCard = ({cloudinaryImageId,name,price,description}) => {
    console.log(cloudinaryImageId,name,price,description)
  return (
    <div className="item-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurandImg" />
      <h2>{name}</h2>
      <span><BiRupee/> {price}</span>
      <p>{description}</p>
    </div>
  );
};

export default ItemCard;