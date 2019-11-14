import React from "react";

export default function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div>
          <h1>
            {props.user.name +
              " " +
              props.user.firstLastName +
              " " +
              props.user.secondLastName}
          </h1>
          <span
            onClick={() => {
              props.TogglePopup();
            }}
          >
            X
          </span>
        </div>
      </div>
    </div>
  );
}
