import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import { toast } from "react-toastify";

const Register = () => {
  const { createNewuser, setUser } = useContext(AuthContext);

  const handleregister = (e) => {
    e.preventDefault();

    // another way to get input valu

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(name,photo,email,password);

    createNewuser(email, password)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        toast.error("ERROR", error.message);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0  p-10">
          <form className="card-body" onSubmit={handleregister}>
            <h2 className="text-2xl font-semibold text-center pb-10">
              Register your account
            </h2>
            {/* input area start*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            {/* input area end */}
            {/* input area start*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered"
                required
              />
            </div>
            {/* input area end */}
            {/* input area start*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* input area end */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Register</button>
            </div>
            <p className="text-center font-semibold">
              Already Have An Account ?{" "}
              <span className="text-red-500">
                <Link to={"/auth/login"}>Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
