import React from "react";
import logo from "../assets/icons/logo.svg";
import home from "../assets/icons/home.svg";
import network from "../assets/icons/network.svg";
import notification from "../assets/icons/notification.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [dropdoen, setDropdown] = useState("hidden");
  return (
    <div className="w-full border-b border-black-100 fixed left-0 bg-white">
      <div
        className={"z-10 fixed bg-white/40 w-full h-full " + dropdoen}
        onClick={() => (!dropdoen ? setDropdown("hidden") : setDropdown(null))}
      ></div>
      <div
        className="flex items-center justify-center mx-auto"
        style={{ maxWidth: "1128px" }}
      >
        <div className="flex flex-1">
          <div className="flex items-center justify-center">
            <Link to="/feed" className="p-1">
              <img src={logo} alt="non" className="h-10 pr-1" />
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
          <Link to="/feed/">
            <div className="flex flex-col items-center justify-center px-4 py-1">
              <img src={home} alt="non" className="h-5" />
              Home
            </div>
          </Link>
          <Link to="/feed/network">
            <div className="flex flex-col items-center justify-center px-4 py-1">
              <img src={network} alt="non" className="h-5" />
              My Network
            </div>
          </Link>
          <Link to="/feed/notifications">
            <div className="flex flex-col items-center justify-center px-4 py-1">
              <img src={notification} alt="non" className="h-5" />
              Notifications
            </div>
          </Link>
          <div className="inline-flex">
            <div
              className="flex flex-col items-center justify-center px-4 py-1 cursor-pointer"
              onClick={() =>
                !dropdoen ? setDropdown("hidden") : setDropdown(null)
              }
            >
              <img
                className="rounded-full h-5 w-5 overflow-hidden"
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                alt=""
              />
              Me .^.
            </div>

            <div
              className={"relative " + dropdoen}
              onClick={() =>
                !dropdoen ? setDropdown("hidden") : setDropdown(null)
              }
            >
              <div
                type="button"
                className="inline-flex items-center justify-center h-full"
              ></div>
              <div className="absolute right-0 z-100 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                <div className="text-center border border-gray-200 px-4 py-8">
                  <img
                    className="rounded-full h-16 w-16 overflow-hidden mx-auto"
                    src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                    alt=""
                  />
                  <h1 className="text-lg">Hobayer Golondaz</h1>
                  <p className="text-sm">
                    Full-Stack MERN Developer || JavaScript
                  </p>
                  <Link
                    to="/feed/profile"
                    className="text-center text-sm p-1 px-5 mt-3 bg-gray-100 w-full block"
                  >
                    View Profile
                  </Link>
                </div>
                <div className="p-2 pb-4">
                  <p className="p-2">Account</p>
                  <Link
                    to="/feed/"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  >
                    Settings
                  </Link>
                  <hr />
                  <p className="p-2">Actions</p>
                  <Link
                    to="/feed/"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  >
                    Signout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
