import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CiLogout } from "react-icons/ci";
import { FaBicycle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="navbar bg-base-100 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/products">Bikes</Link>
            </li>
            {user ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <FaBicycle size={30} /> PedalPals
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ml-auto">
        <ul className="menu menu-horizontal px-1 flex gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/products">Bikes</Link>
          </li>
          {user ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {user && (
        <div className="navbar-end ml-auto">
          <button
            onClick={() => {
              logout();
            }}
            className="btn bg-slate-900 text-white hover:bg-slate-800"
          >
            Logout <CiLogout size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
