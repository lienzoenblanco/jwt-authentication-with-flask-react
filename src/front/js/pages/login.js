import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "./styles.css";

let email = "";
let password = "";

export const Login = () => {
  const { actions } = useContext(Context);
  const [redirect, setRedirect] = useState(false);

  return (
    <div>
      <div className="mt-5 m-auto container w-25">
        <h2>Login</h2>

        {redirect ? (
          <Link to="/private">Acceder a página privada</Link>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              actions.login(email, password);
              setRedirect(true);
            }}
          >
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(event) => {
                  email = event.target.value;
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => {
                  password = event.target.value;
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
