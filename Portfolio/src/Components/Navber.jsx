import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navbarStyle = {
    paddingTop: "5px", // Adjust this value as needed
    paddingBottom: "10px", // Adjust this value as needed
    marginTop: "0", // Remove or adjust top margin
    marginBottom: "0", // Remove or adjust bottom margin
  };

  return (
    <nav
      className="flex flex-wrap justify-between items-center text-white shadow-2xl fade-in-animation"
      style={navbarStyle}
    >
      <NavLink
        to="/"
        className="text-3xl font-bold tracking-wide transition duration-300 hover:scale-110 hover:text-orange-500 rounded-lg m-4 md:m-8 md:ml-20 p-2"
        style={{ marginTop: "-14px" }}
      >
        <FaHome
          className="text-white transition duration-300 hover:scale-110 hover:text-orange-500"
          style={{ fontSize: "1.9em", marginTop: "8px", marginBottom: "0px" }}
        />
      </NavLink>
      <div className="md:hidden absolute right-10 top-6 z-50">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer transition-transform duration-300 text-white"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer transition-transform duration-300 text-white"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text-white transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {
          <ul className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-semibold">
            {["about", "skills", "project", "socialmedia", "contact"].map(
              (route) => (
                <li key={route}>
                  <NavLink
                    to={`/${route}`}
                    className={({ isActive }) =>
                      `text-md font-extrabold transition duration-300 ${
                        isActive
                          ? "text-orange-500 scale-110"
                          : "hover:text-orange-500 hover:scale-110"
                      }`
                    }
                    onClick={() => setMenu(false)}
                  >
                    {route.charAt(0).toUpperCase() + route.slice(1)}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        }
      </div>

      <ul className="hidden md:flex gap-6 mx-auto mt-0 font-semibold text-lg">
        {" "}
        {/* Removed mt-4 */}
        {["about", "skills", "project", "socialmedia", "contact"].map(
          (route) => (
            <li key={route}>
              <NavLink
                to={`/${route}`}
                className={({ isActive }) =>
                  `text-md font-extrabold px-3 transition duration-500 ${
                    isActive
                      ? "text-orange-500 scale-110"
                      : "hover:text-orange-500 hover:scale-110"
                  }`
                }
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
