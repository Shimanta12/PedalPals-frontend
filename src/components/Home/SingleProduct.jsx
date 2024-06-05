import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  const { brand, frame_material, name, price, _id, img_url } = product;
  return (
    <div className="card card-compact w-80 md:w-1/4 bg-base-100 shadow-xl">
      <figure>
        <img src={img_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="text-lg">Brand: {brand}</h2>
        <h2 className="text-lg">Material: {frame_material}</h2>
        <h2 className="text-xl font-semibold">{price}$</h2>
        <Link
          className="w-full btn bg-slate-900 text-white"
          to={`/products/${_id}`}
        >
          Details <TbListDetails size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
