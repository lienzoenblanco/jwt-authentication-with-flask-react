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
      <h1>Acceso privado</h1>
      {store.token == "error user not exist" || store.token == "" ? (
        <Link to="/login">No tienes acceso. Volver al login</Link>
      ) : (
        <div className="alert alert-info">
          Tu usuario sí tiene acceso a esta página
        </div>
      )}
    </div>
  );
};
