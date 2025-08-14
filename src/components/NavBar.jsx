import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <ul className="flex justify-center items-center gap-5 py-5">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline text-3xl"
                : "text-white text-3xl"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline text-3xl"
                : "text-white text-3xl"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline text-3xl"
                : "text-white text-3xl"
            }
            to="/users"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline text-3xl"
                : "text-white text-3xl"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
