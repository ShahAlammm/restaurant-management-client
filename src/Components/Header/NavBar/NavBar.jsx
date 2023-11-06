import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOut().then();
  };

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500 font-extrabold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500 font-extrabold"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500 font-extrabold"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500 font-extrabold"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500 font-extrabold"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className="navbar z-[1]"

    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-24 w-28 hidden md:inline-block"
            src="https://i.ibb.co/th4ZYw5/44b43d-465bd94e983e4048ae17912458c3315c-mv2.webp"
            alt=""
          />
          <p >
            <img className="h-24 w-28 hidden md:inline-block" src="https://i.ibb.co/2dnxfs1/SW-LOGO.png" alt="" />
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{navLink}</ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="text-3xl">
          {user?.photoURL ? (
            <details className="dropdown">
              <summary className="m-1 btn btn-ghost">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </summary>
              <ul className="p-2 mt-2 menu dropdown-content z-[1] font-bold w-52">
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <p>{user?.email}</p>
                </li>
              </ul>
            </details>
          ) : (
            <details className="dropdown">
              <summary className="m-1 btn btn-ghost text-4xl">
                <FaUserCircle></FaUserCircle>
              </summary>
              <ul className="p-2 mt-2 menu dropdown-content z-[1] font-bold w-52">
              <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <p>{user?.email}</p>
                </li>
              </ul>
            </details>
          )}
        </div>
        {user ? (
          <Link
            onClick={handleLogOut}
            className="btn rounded-full bg-gradient-to-r from-indigo-600 to-blue-300 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
            to="/"
          >
            LogOut
          </Link>
        ) : (
          <Link
            className="btn rounded-full bg-gradient-to-r from-amber-600 to-amber-400 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
            to="/signup"
          >
            LogIn
          </Link>
        )}
        <div className="form-control">
          <label className="label cursor-pointer p-0 m-0">
            <input type="checkbox" className="toggle" onChange={handleToggle} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;