import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const {
    name,
    brand,
    color,
    type,
    frame_material,
    wheel_size,
    brake_type,
    gears,
    price,
  } = useLoaderData();

  return (
    <div className="container h-screen mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">{name}</h1>
      <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-3">
        <div className="basis-1/2 flex-1 md:p-4">
          <div className="overflow-x-auto">
            <table className="table text-lg">
              <tbody>
                {/* row 1 */}
                <tr className="hover">
                  <th>Brand</th>
                  <td>{brand}</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>Color</th>
                  <td>{color}</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <th>Frame meterial</th>
                  <td>{frame_material}</td>
                </tr>
                <tr className="hover">
                  <th>Gears</th>
                  <td>{gears}</td>
                </tr>
                <tr className="hover">
                  <th>Type</th>
                  <td>{type}</td>
                </tr>
                <tr className="hover">
                  <th>Wheel size</th>
                  <td>{wheel_size}</td>
                </tr>
                <tr className="hover">
                  <th>Brake type</th>
                  <td>{brake_type}</td>
                </tr>
                <tr className="hover">
                  <th>Price</th>
                  <td className="font-bold">{price}$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn bg-slate-800 text-white w-full">
            Buy Now
          </button>
        </div>
        <div className="basis-1/2 flex-1">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="shoes"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
