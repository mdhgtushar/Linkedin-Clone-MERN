import React from "react";
import logo from "../assets/icons/logo.svg";
import home from "../assets/icons/home.svg";
import network from "../assets/icons/network.svg";
import notification from "../assets/icons/notification.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full border-b border-black-100 fixed left-0 bg-white">
      <div
        className="flex items-center justify-center mx-auto"
        style={{ maxWidth: "1128px" }}
      >
        <div className="flex flex-1">
          <div className="flex items-center justify-center">
            <Link to="/" className="p-1">
              <img src={logo} alt="non" className="h-10 pr-4" />
            </Link>
          </div>
          <form className="flex-1 flex items-center justify-center">
            <div className="flex-1">
              <input
                className="border border-black-100 p-1 w-full outline-none px-5"
                type="text"
                placeholder="Search.."
              />
            </div>
            <div>
              <input
                type="button"
                className="border px-3 py-1 cursor-pointer"
                value="search"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-1 items-right justify-end flex-row pl-7 text-sm">
          <Link to="/">
            <div className="flex flex-col items-center justify-center px-4 py-1">
              <img src={home} alt="non" className="h-5" />
              Home
            </div>
          </Link>
          <Link to="/network">
            <div className="flex flex-col items-center justify-center px-4 py-1">
              <img src={network} alt="non" className="h-5" />
              My Network
            </div>
          </Link>
          <Link to="/notifications">
            <div className="flex flex-col items-center justify-center px-4 py-1">
              <img src={notification} alt="non" className="h-5" />
              Notifications
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
