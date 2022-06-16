import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
  <div>
    <nav className="nav bg-black">
        <Link className="text text-decoration-none text-white" to={'/'}>Home</Link>
        <Link className="text text-decoration-none text-white" to={'/add'}>Add New Data</Link>
    </nav>
  </div>
  );
};

export default NavBar;
