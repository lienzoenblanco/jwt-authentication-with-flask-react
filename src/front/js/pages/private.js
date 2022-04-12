import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "./styles.css";

export const Private = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.validate();
  });

  return (
    <div className="text-center mt-5">
      <h1>Private access</h1>
      {store.token == "error user not exist" || store.token == null ? (
        <Link to="/login">You do not have access. Back to login</Link>
      ) : (
        <div className="alert alert-info">
          Your user does have access to this page
        </div>
      )}
    </div>
  );
};
