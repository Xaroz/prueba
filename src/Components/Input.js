import React from "react";

export default function Input(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.text}</label>
      <input
        id={props.name}
        placeholder={props.text}
        onChange={props.handleInputChange}
        name={props.name}
        type={props.typeName}
        required
      />
    </div>
  );
}
