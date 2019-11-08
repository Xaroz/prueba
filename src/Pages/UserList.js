import React, { useState, useEffect } from "react";
import { Table } from "../Components/Table";
import MdArrowRoundForward from "react-ionicons/lib/MdArrowRoundForward";
import MdArrowRoundBack from "react-ionicons/lib/MdArrowRoundBack";

export const UserList = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Jason Guo",
      email: "jasonguo@gg.com",
      gender: "M"
    },
    {
      id: "2",
      name: "Jason Guo",
      email: "jasonguo@gg.com",
      gender: "M"
    },
    {
      id: "3",
      name: "Jason Guo",
      email: "jasonguo@gg.com",
      gender: "M"
    },
    {
      id: "4",
      name: "Jason Guo",
      email: "jasonguo@gg.com",
      gender: "M"
    },
    {
      id: "5",
      name: "Jason Guo",
      email: "jasonguo@gg.com",
      gender: "M"
    },
    {
      id: "6",
      name: "Jason Guo",
      email: "jasonguo@gg.com",
      gender: "M"
    },
    {
      id: "7",
      name: "Jason Guo",
      email: "jasonguo@gg.com",
      gender: "M"
    }
  ]);
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    setCurrentUsers(
      users.slice(currentPage * pageSize, pageSize * (currentPage + 1))
    );
    document.title = "Lista de Usuarios";
  }, [users, setCurrentUsers, pageSize, currentPage]);

  useEffect(() => {
    document.title = "Lista de Usuarios";
  }, []);

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
          {currentUsers.map(user => (
            <Table key={user.id} user={user} />
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
    </div>
  );
};
