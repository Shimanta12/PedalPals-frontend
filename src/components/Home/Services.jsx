import boy_with_bike from "../../assets/boy_with_bike.png";
import services_1 from "../../assets/services-1.svg";
import services_2 from "../../assets/services-2.svg";
import services_3 from "../../assets/services-3.svg";

const Services = () => {
  return (
    <div className="lg:h-screen md:w-11/12 mx-auto flex flex-col md:flex-row justify-evenly items-center gap-4">
      <div className="basis-1/2">
        <img className="" src={boy_with_bike} alt="" />
      </div>
      <div className="basis-1/2">
        <h1 className="text-3xl font-bold">
          Clean and timeless designs that make every ride a thrill. Wherever
          youre heading,{" "}
          <span className="text-gray-500 font-bold">
            our bikes are made to make your daily commute a joy.
          </span>
        </h1>
        <p className="text-xl text-gray-500 my-5">
          This isnt a bicycle. This is a soul stirring,
          bring-a-smile-to-your-face, aerodynamic work of art. Designed to move
          you through the world without the weight of it. Where your cycling
          journey begins! As avid cyclists not ourselves, we understand the joy
          and freedom for a comes from pedaling
        </p>
        <div className="flex flex-col md:flex-row  justify-center items-center my-5 gap-4">
          <div className="flex flex-col justify-center items-center font-bold">
            <img src={services_1} alt="" />
            <p className="text-sm text-gray-500  my-2">
              Limited lifetime warranty on all Bikes.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <img src={services_2} alt="" />
            <p className="text-sm text-gray-500  my-2">
              Free ground shipping and easy returns.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <img src={services_3} alt="" />
            <p className="text-sm text-gray-500  my-2">
              Designed, engineered & assembled in the USA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
