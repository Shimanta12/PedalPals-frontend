import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  //JWT token
  const token = localStorage.getItem("token");

  const notify = (message) => toast(message);

  const {
    _id,
    name,
    brand,
    color,
    type,
    frame_material,
    wheel_size,
    brake_type,
    gears,
    price,
    img_url,
  } = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const color = form.color.value;
    const type = form.type.value;
    const frame_material = form.frame_material.value;
    const wheel_size = form.wheel_size.value;
    const brake_type = form.brake_type.value;
    const gears = form.gears.value;
    const price = form.price.value;
    const img_url = form.img_url.value;

    const bike = {
      name: name,
      brand: brand,
      color: color,
      type: type,
      frame_meterial: frame_material,
      wheel_size: wheel_size,
      brake_type: brake_type,
      gears: gears,
      price: price,
      img_url: img_url,
    };
    await fetch(`http://localhost:3000/products/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bike),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        notify("Product details updated!");
      });
  };

  /* 
  
  */

  return (
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center my-5">Update Product</h1>
        <div className="mt-2">
          <label htmlFor="name" className="font-bold italic">
            Name:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black  focus:outline-none rounded"
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Name"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="brand" className="font-bold italic">
            Brand:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="text"
            name="brand"
            defaultValue={brand}
            placeholder="Brand"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="color" className="font-bold italic">
            Color:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="text"
            name="color"
            defaultValue={color}
            placeholder="Color"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="type" className="font-bold italic">
            Type:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="text"
            name="type"
            defaultValue={type}
            placeholder="Type"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="frame_meterial" className="font-bold italic">
            Frame meterial:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="text"
            name="frame_material"
            defaultValue={frame_material}
            placeholder="Frame meterial"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="wheel_size" className="font-bold italic">
            Wheel size:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="text"
            name="wheel_size"
            defaultValue={wheel_size}
            placeholder="Wheel size"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="brake" className="font-bold italic">
            Brake type:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="text"
            name="brake_type"
            defaultValue={brake_type}
            placeholder="Brake"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="gears" className="font-bold italic">
            Gears:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="text"
            name="gears"
            defaultValue={gears}
            placeholder="Gears"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="price" className="font-bold italic">
            Price:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="number"
            name="price"
            defaultValue={price}
            placeholder="Price"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="img_url" className="font-bold italic">
            Image URL:
          </label>
          <input
            className="bg-gray-100 p-2 w-full border border-b-black focus:outline-none rounded"
            type="text"
            name="img_url"
            defaultValue={img_url}
            placeholder="Image URL"
            required
          />
        </div>
        <div className="mt-2">
          <input
            className="w-full btn bg-slate-900 text-white hover:bg-slate-800"
            type="submit"
            value="Update"
          />
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
      </form>
    </div>
  );
};

export default UpdateProduct;
