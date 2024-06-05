import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-evenly items-center gap-4">
      <div>
        <h1 className=" text-7xl font-bold basis-1/2">
          Discover Your <br />
          Favorite Bike
        </h1>
        <p className="text-lg font-bold my-5 text-gray-600">
          Performance built to handle any terrain & riding style.
        </p>
        <div className="flex gap-4">
          <Link to="/products">
            <button className="btn btn-lg bg-slate-900 text-white hover:bg-slate-800">
              Shop bikes <FaLongArrowAltRight size={24} />
            </button>
          </Link>
          <Link to="/about">
            <button className="btn-lg btn-link text-slate-900 font-bold hover:text-slate-700">
              Learn more
            </button>
          </Link>
        </div>
      </div>
      <div className="basis-1/2">
        <img className="w-full" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
