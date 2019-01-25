import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { MemoryRouter as Router } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Calendar from "./Calendar";
import Grades from "./Grades";
import Messages from "./Messages";
import Profile from "./Profile";

ReactDOM.render(
  <Router>
    <div>
      <App />
      <div style={{ padding: 20 }}>
        <Switch>
          {/* <Route path="/" component={App} /> */}
          <Route path="/home" component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/grades" component={Grades} />
          {/* <Route path="/messages" component={Messages} /> */}
          <Route path="/messages" render={props => <Messages />} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);

ReactDOM.render(<div style={{display: 'none'}}>POPUP</div>, document.getElementById('popup'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
