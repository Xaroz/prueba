import React, { useState } from "react";
import Avatar from "../Images/Avatar.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const setMenu = () => {
    const currentValue = displayMenu;
    setDisplayMenu(!currentValue);
  };
  return (
    <header>
      {/* <h1 className="logo">TBD</h1> */}
      <div className="img-container" onClick={setMenu}>
        <img src={Avatar} alt="user" />
        {displayMenu ? (
          <div className="menu">
            <ul>
              <hr />
              <li>
                <Link to="/">Cerrar Session</Link>
              </li>
              <hr />
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};
