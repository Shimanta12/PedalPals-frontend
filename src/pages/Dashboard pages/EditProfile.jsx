import { useEffect, useState } from "react";
import { updatePassword } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const { user, provider } = useAuth();
  const [userInfo, setUserInfo] = useState();

  // jwt token
  const token = localStorage.getItem("token");

  const notify = (message) => toast(message);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user, userInfo]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const form = e?.target;
    const name = form?.name?.value;
    const country = form?.country?.value;
    const city = form?.city?.value;
    const password = form?.password?.value;
    const confirm_password = form?.confirm_password?.value;

    const userInfo = {};
    if (name) {
      userInfo["name"] = name;
    }
    if (country) {
      userInfo["country"] = country;
    }
    if (city) {
      userInfo["city"] = city;
    }
    if (userInfo) {
      await fetch(`http://localhost:3000/users/${user?.email}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          notify("User updated!");
        });
    }
    if (password && password === confirm_password) {
      updatePassword(user, password);
      notify("Password updated successfully!");
    }
    form.reset();
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Update Profile</h1>
      <div className="avatar placeholder flex justify-center mt-3">
        <div className="bg-neutral text-neutral-content rounded-full w-24">
          <span className="text-3xl">D</span>
        </div>
      </div>
      <form onSubmit={handleUpdateProfile} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={userInfo?.name}
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="email"
            className="input input-bordered"
            disabled
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <input
            type="text"
            name="country"
            placeholder="country"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input
            type="text"
            name="city"
            placeholder="city"
            className="input input-bordered"
          />
        </div>
        {provider === "password" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">New password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm new password</span>
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm password"
                className="input input-bordered"
              />
            </div>
          </>
        )}
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Update"
            className="btn bg-slate-900 text-white hover:bg-slate-800"
          />
        </div>
      </form>
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
    </div>
  );
};

export default EditProfile;
