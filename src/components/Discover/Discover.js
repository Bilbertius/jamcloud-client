import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Discover.css";
import SongList from "../../routes/SongList";


class Discover extends React.Component {
  render() {
    return (
      <Router className="discoveryLists">
        <Switch>
          <Route exact path="/songs">
            
            <SongList />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default Discover;
