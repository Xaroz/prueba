import React, { useState, useMemo } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { UserList } from "./Pages/UserList";
import { AddUser } from "./Pages/AddUser";
import { NavBar } from "./Components/NavBar";
import { SideBar } from "./Components/SideBar";
import { UsersContext } from "./Components/UsersContext";

function App() {
  const [users, setUsers] = useState([
    {
      id: "1",
      age: 22,
      birthDate: "2019-05-04",
      civilStatus: "Soltero/a",
      firstLastName: "Guo",
      hasChild: "No",
      idCard: "12345678901",
      name: "Jason",
      phone: "8886543215",
      secondLastName: "Jinliu",
      email: "jasonguo@gg.com",
      gender: "Hombre"
    }
  ]);
  const [lastUsedId, setLastUsedId] = useState(1);
  const [sucess, setSucess] = useState(false);

  const value = useMemo(
    () => ({ users, setUsers, lastUsedId, setLastUsedId, sucess, setSucess }),
    [users, setUsers, lastUsedId, setLastUsedId, sucess, setSucess]
  );
  const DashboardRoute = () => (
    <>
      <NavBar />
      <div className="container">
        <SideBar />
        <UsersContext.Provider value={value}>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/users" component={UserList}></Route>
          <Route exact path="/add" component={AddUser}></Route>
        </UsersContext.Provider>
      </div>
    </>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={DashboardRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
