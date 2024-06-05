import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };
  return (
    <button onClick={handleGoogleSignIn} className="btn w-full flex gap-2">
      <FcGoogle size={24} />
      <span>Google</span>
    </button>
  );
};

export default GoogleLogin;
