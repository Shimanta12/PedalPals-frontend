import { useEffect, useState } from "react";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const notify = (message) => toast(message);

  useEffect(() => {
    fetch("https://pedal-pals-backend.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const onDelete = (id) => {
    setProducts(products.filter((product) => product._id !== id));
    notify("Product deleted successfully!");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">All products</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
        {products?.map((product) => (
          <Product key={product._id} product={product} onDelete={onDelete} />
        ))}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
};

export default AllProducts;
