import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const FeaturedProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="md:h-screen my-5">
      <div>
        <h1 className="text-4xl font-bold text-center">Our Latest Bikes</h1>
        <p className="text-xl font-semibold text-gray-600 text-center my-5">
          Welcome to dash, where your cycling journey begins! As avid cyclists
          ourselves, <br /> we understand the joy and freedom that comes from
          pedaling on two wheels
        </p>
      </div>
      <div className="flex flex-col flex-1 md:flex-row  justify-center  items-center gap-4 ">
        {products?.slice(0, 3)?.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
        <div>
          <Link
            to="/products"
            className="btn bg-slate-900 text-white hover:bg-slate-800 my-5"
          >
            Explore all bikes <FaSearch size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
