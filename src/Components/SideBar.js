import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Lista de usuario</Link>
      <Link to="/add">Agregar usuario</Link>
    </div>
  );
};
