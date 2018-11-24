import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
