// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Lecture Scheduler</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
