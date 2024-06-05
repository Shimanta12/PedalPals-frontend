import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

const UserProfile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://pedal-pals-backend.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user, userInfo]);

  return (
    <div className="container mx-auto flex justify-center">
      <div className="md:w-1/2 flex flex-col gap-5 ">
        <h1 className="text-5xl text-center font-bold">
          Welcome {userInfo?.name}!
        </h1>
        <div className="flex flex-col">
          <div className="avatar placeholder flex justify-center my-3">
            <div className="bg-neutral text-neutral-content rounded-full w-36">
              <span className="text-3xl">
                {userInfo?.name[0].toUpperCase()}
              </span>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <th>User name</th>
                    <td>{userInfo?.name}</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <th>Email</th>
                    <td>{userInfo?.email}</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="hover">
                    <th>Country</th>
                    <td>{userInfo?.country}</td>
                  </tr>
                  <tr className="hover">
                    <th>City</th>
                    <td>{userInfo?.city}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/dashboard/edit-profile"}
            className="btn w-full bg-slate-900 text-white hover:bg-slate-800"
          >
            Edit Profile <FaRegEdit size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
