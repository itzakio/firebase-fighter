import React from 'react';
import logo from "../assets/img/firebase-logo.png"
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <div className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;