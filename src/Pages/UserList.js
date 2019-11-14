import React, { useState, useEffect, useContext } from "react";
import { Table } from "../Components/Table";
import { UsersContext } from "../Components/UsersContext";
import MdArrowRoundForward from "react-ionicons/lib/MdArrowRoundForward";
import MdArrowRoundBack from "react-ionicons/lib/MdArrowRoundBack";
import Popup from "../Components/Popup";

export const UserList = () => {
  const { users, setUsers } = useContext(UsersContext);
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [viewUser, setViewUser] = useState(null);

  useEffect(() => {
    document.title = "Lista de Usuarios";
  });

  const NextPage = () => {
    if (users.length <= pageSize * (currentPage + 1)) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const PrevPage = () => {
    if (currentPage === 0) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const DeleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const TogglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="content">
      <h1>Lista de usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Correo eletrónico</th>
            <th>Género</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users
            .slice(currentPage * pageSize, pageSize * (currentPage + 1))
            .map(user => (
              <Table
                key={user.id}
                user={user}
                DeleteUser={DeleteUser}
                TogglePopup={TogglePopup}
                setViewUser={setViewUser}
              />
            ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={PrevPage} className="prev">
          <MdArrowRoundBack />
        </button>
        <button onClick={NextPage} className="next">
          <MdArrowRoundForward />
        </button>
      </div>
      {showPopup ? <Popup TogglePopup={TogglePopup} user={viewUser} /> : null}
    </div>
  );
};
