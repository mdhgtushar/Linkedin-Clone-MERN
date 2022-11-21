import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import Loading from "../inc/components.jsx/Loading";

const Login = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return loading ? (
    <Loading />
  ) : (
    <div className="w-full fixed left-0 bg-white">
      <div
        className="flex items-center justify-center mx-auto p-5"
        style={{ maxWidth: "1128px" }}
      >
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <Link to="/" className="p-1">
              <img src={logo} alt="non" className="h-10 pr-4" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center mx-auto p-5"
        style={{ maxWidth: "1128px" }}
      >
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-5">Welcome Back</h1>
          <br />
          <div className="w-96">
            <div>
              <input
                type="text"
                className="border border-gray-200 w-full p-2"
                placeholder="Email Address"
              />
            </div>
            <br />
            <div>
              <input
                type="password"
                className="border border-gray-200 w-full p-2"
                placeholder="Password"
              />
            </div>
            <br />
            <Link to="/">Forget password?</Link>
            <br />
            <br />
            <div>
              <input
                type="submit"
                className="border border-gray-200 cursor-pointer rounded-full w-full p-2 bg-blue-400"
                value="Sign In"
              />
            </div>
            <br />
            <hr />
            <br />
            <div>
              <input
                type="submit"
                className="border border-gray-200 rounded-full w-full p-2"
                value="Sign In With Google"
              />
            </div>
            <br />
            <div>
              <Link
                to="/signup"
                className="text-center border border-gray-200 rounded-full block w-full p-2 cursor-pointer"
              >
                New to LinkedIn? Join now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
