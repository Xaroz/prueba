import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { UserList } from "./Pages/UserList";
import { AddUser } from "./Pages/AddUser";
import { NavBar } from "./Components/NavBar";

function App() {
  const DashboardRoute = () => (
    <>
      <NavBar />
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/users" component={UserList}></Route>
      <Route exact path="/add" component={AddUser}></Route>
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
