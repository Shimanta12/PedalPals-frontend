import { useEffect, useState } from "react";
import SingleProduct from "../components/Home/SingleProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl italic font-bold text-center my-5">
        All products
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
        {products.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
