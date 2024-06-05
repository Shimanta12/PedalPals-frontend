/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Product = ({ product, onDelete }) => {
  const { brand, frame_material, name, price, _id, img_url } = product;

  const handleDelete = () => {
    fetch(`https://pedal-pals-backend.vercel.app/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(_id);
      });
  };

  return (
    <div className="card card-compact w-80 md:w-72 lg:w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={img_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <h2 className="text-lg text-gray-600 font-semibold">Brand: {brand}</h2>
        <h2 className="text-lg text-gray-600 font-semibold">
          Material: {frame_material}
        </h2>
        <h2 className="text-xl font-semibold">{price}$</h2>
        <div className="w-full flex justify-evenly items-center text-xs">
          <Link
            className="btn btn-sm bg-slate-900 text-white"
            to={`/dashboard/all-products/${_id}`}
          >
            Details <TbListDetails size={20} />
          </Link>
          <Link
            to={`/dashboard/all-products/update-product/${_id}`}
            className="btn btn-sm bg-green-500 text-white"
          >
            Edit <FaRegEdit size={20} />
          </Link>
          <Link
            onClick={handleDelete}
            className="btn btn-sm bg-red-500 text-white"
          >
            Delete <MdDelete size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
