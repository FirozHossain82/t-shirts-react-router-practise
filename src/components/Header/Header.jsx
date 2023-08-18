import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex justify-center  items-center py-6  bg-lime-100 ">
      <Link className="mr-8  text-lg font-bold hover:text-orange-400 " to="/">
        Home
      </Link>
      <Link className="mr-8  text-lg font-bold hover:text-red-500" to="/review">Order-Review</Link>
      <Link className="mr-8  text-lg font-bold hover:text-purple-400"  to="/about">About</Link>
      <Link className="mr-8 text-lg font-bold hover:text-green-400" to="/contact">Contact</Link>
      <Link className="mr-8 text-lg font-bold hover:text-green-400" to="/grandpa">Grandpa</Link>
    </nav>
  );
};

export default Header;
