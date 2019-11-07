import React, { useState } from "react";
import Input from "../Components/Input";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const initialFormState = {
    username: "",
    password: ""
  };
  const fakeUser = {
    username: "admin",
    password: "123admin"
  };

  const [login, setLogin] = useState(initialFormState);
  const [wrongCredential, setWrongCredential] = useState(false);
  let history = useHistory();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const validateUser = event => {
    event.preventDefault();
    if (
      login.username === fakeUser.username &&
      login.password === fakeUser.password
    ) {
      history.push("/dashboard");
    } else {
      setLogin(initialFormState);
      setWrongCredential(true);
    }
  };
  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <div className="login">
        <form className="login-form" onSubmit={validateUser}>
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
          <button>Acceder</button>
        </form>
      </div>
      {wrongCredential ? (
        <h4 className="wrong-credential">Credenciales equivocadas</h4>
      ) : null}
    </div>
  );
};
