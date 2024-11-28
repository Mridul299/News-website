import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import { useContext, useState } from "react";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  const [error , setError] = useState({});

  const handlesignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        Navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({...error, login:err.message});
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0  p-10">
        <form className="card-body" onSubmit={handlesignin}>
          <h2 className="text-2xl font-semibold text-center pb-10">
            Login your account
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
              error.login && (
                <label className="label text-sm text-red-600">
                  {error.login}
                </label>
              )
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <p className="text-center font-semibold">
            Dont’t Have An Account ?{" "}
            <span className="text-red-500">
              <Link to={"/auth/register"}>Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
