import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import FrontPage from "./components/FrontPage/FrontPage";
import Discover from "./components/Discover/Discover";
import Create from "./components/CreateSong/Create.js";
import LoginPage from "./routes/LoginPage";
import RegistrationPage from "./routes/RegistrationPage";

export default class App extends React.Component {
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <Router>
        <header>
          <Link to="/">
            <h1>JamCloud</h1>
          </Link>
          <nav>
            <ul className="NavLinks">
              <li>
                <Link to="/songs">Jams</Link>
              </li>
              <li>
                <Link to="/maker">Create</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegistrationPage />
          </Route>

          <Route path="/songs">
            <Discover />
          </Route>

          <Route path="/maker">
            <Create />
          </Route>

          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
