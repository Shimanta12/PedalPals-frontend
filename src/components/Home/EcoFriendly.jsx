import { FaLongArrowAltRight } from "react-icons/fa";
import ecoImg from "../../assets/ecofriendly.jpg";
import { Link } from "react-router-dom";

const EcoFriendly = () => {
  return (
    <div className="lg:h-screen py-12 lg:py-16 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Content Section */}
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h2 className="text-3xl text-slate-800 lg:text-4xl font-semibold mb-4">
            Environmental Sustainability
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            Cycling is not only a healthy and enjoyable activity but also an
            environmentally friendly mode of transportation. By choosing to ride
            a bike instead of driving a car, you can reduce your carbon
            footprint and help combat climate change. Biking produces zero
            emissions, unlike cars, which release harmful pollutants into the
            air. Additionally, cycling helps reduce traffic congestion,
            conserves energy, and promotes a cleaner and greener environment for
            future generations.
          </p>
          <Link to="/products">
            <button className="btn btn-lg bg-slate-900 text-white hover:bg-slate-800">
              Shop bikes <FaLongArrowAltRight size={24} />
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            src={ecoImg}
            alt="Sustainability"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EcoFriendly;
