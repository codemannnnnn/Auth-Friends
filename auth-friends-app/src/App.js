import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="navBar">
        <Link to="/login">
          <h1>Friends</h1>
        </Link>
        <ul className="links">
          <li className="p-2">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-2">
            <Link to="/protected">Add Friend</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
