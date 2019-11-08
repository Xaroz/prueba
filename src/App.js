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

  const value = useMemo(() => ({ users, setUsers }), [users, setUsers]);
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
