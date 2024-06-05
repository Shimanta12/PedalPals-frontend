import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdGridView } from "react-icons/md";

const DashboardLayout = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky">
        <div className="flex-none">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-square btn-ghost drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dashboard</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* outlet */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-base font-bold">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard">
                <MdGridView size={24} />
                Overview
              </Link>
            </li>
            <li>
              <Link to="/dashboard/user-profile">
                <FaUser size={24} />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/all-products">
                <AiFillProduct size={24} /> All products
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-product">
                <IoMdAdd size={24} />
                Add product
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaHome size={24} />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
