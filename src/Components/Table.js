import React from "react";
// import MdEye from "react-ionicons/lib/MdEye";
import MdTrash from "react-ionicons/lib/MdTrash";
// import MdCreate from "react-ionicons/lib/MdCreate";

export const Table = props => {
  return (
    <>
      <tr>
        <td>{props.user.id}</td>
        <td>
          {props.user.name +
            " " +
            props.user.firstLastName +
            " " +
            props.user.secondLastName}
        </td>
        <td>{props.user.email}</td>
        <td>{props.user.gender}</td>
        <td className="button-container">
          {/* <button className="view">
            <MdEye />
          </button>
          <button className="edit">
            <MdCreate />
          </button> */}
          <button
            className="delete"
            onClick={() => props.DeleteUser(props.user.id)}
          >
            <MdTrash />
          </button>
        </td>
      </tr>
    </>
  );
};
