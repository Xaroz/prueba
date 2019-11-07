import React, { useState } from "react";
import Input from "../Components/Input";
import { Link } from "react-router-dom";

export const Login = () => {
  const initialFormState = {
    username: "",
    password: ""
  };

  const [login, setLogin] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <div className="login">
        <form className="login-form">
          <Input
            name="username"
            text="Usuario"
            handleInputChange={handleInputChange}
          />
          <Input
            name="password"
            text="Contraseña"
            typeName="password"
            handleInputChange={handleInputChange}
          />
        </form>

        <Link className="button" to="/dashboard">
          <button>Acceder</button>
        </Link>
      </div>
    </div>
  );
};
