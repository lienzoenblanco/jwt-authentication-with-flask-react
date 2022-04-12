import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { actions } = useContext(Context);

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
            <button className="btn btn-primary" onClick={actions.logout}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
