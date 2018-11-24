import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from './Home';
import Tab from "./Tab";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Tab />
        <div style={{ padding: 20 }}>
          {this.props.children || <Home />}
        </div>
      </div>
    );
  }
}

export default App;
