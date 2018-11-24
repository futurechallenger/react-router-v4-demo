import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const dark = "hsl(200, 20%, 20%)";
const light = "#fff";
const styles = {};

styles.wrapper = {
  padding: "10px 20px",
  overflow: "hidden",
  background: dark,
  color: light
};

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
};

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
};

class Header extends Component {
  logOut = () => {
    alert("log out");
  };

  render() {
    const { user } = this.props;

    return (
      <div style={styles.wrapper}>
        <div style={{ float: "left" }}>
          <NavLink exact to="/home" style={styles.link}>
            Home
          </NavLink>
          <NavLink
            exact
            to="/calendar"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Calendar
          </NavLink>
          <NavLink
            exact
            to="/grades"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Grades
          </NavLink>
          <NavLink
            exact
            to="/messages"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Messages
          </NavLink>
        </div>
        <div style={{ float: "right" }}>
          <NavLink exact style={styles.link} to="/profile">
            {user.name}
          </NavLink>
          <button onClick={this.logOut}>log out</button>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  user: {
    id: 1,
    name: "Test User"
  }
};

export default Header;
