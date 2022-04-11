import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            JWT Authentication With Flask y React.js
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/">
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
