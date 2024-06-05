import { IoIosMail } from "react-icons/io";

const Newsletter = () => {
  return (
    <div className="container mx-auto rounded-lg p-10 shadow-lg my-5">
      <h1 className=" text-7xl font-bold basis-1/2 my-2">
        Subscribe To Our <br />
        Newsletter
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="basis-3/4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered p-3 w-full font-bold outline-black"
            required
          />
        </div>
        <div className="basis-3/12">
          <button className="w-full btn bg-slate-900 text-white hover:bg-slate-800">
            Subscribe <IoIosMail size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
