import contactImage from "../assets/contact.png";
import { IoIosMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={contactImage} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="message"
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-slate-900 text-white hover:bg-slate-800">
                Send message <IoIosMail size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
