import React from "react";
import MdEye from "react-ionicons/lib/MdEye";
import MdTrash from "react-ionicons/lib/MdTrash";
import MdCreate from "react-ionicons/lib/MdCreate";

export const Table = props => {
  const user = props.user;
  return (
    <>
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td className="button-container">
          <button className="view">
            <MdEye />
          </button>
          <button className="edit">
            <MdCreate />
          </button>
          <button className="delete" onClick={() => props.DeleteUser(user.id)}>
            <MdTrash />
          </button>
        </td>
      </tr>
    </>
  );
};
