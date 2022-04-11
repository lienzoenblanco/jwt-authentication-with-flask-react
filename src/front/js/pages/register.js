import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

let email = "";
let password = "";

export const Register = () => {
  const { actions } = useContext(Context);
  const [redirect, setRedirect] = useState(false);

  return (
    <div className="mt-5 m-auto container w-25">
      <h2>Register</h2>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await actions.signup(email, password);
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
      {redirect ? <Redirect to="/login"></Redirect> : null}
    </div>
  );
};
