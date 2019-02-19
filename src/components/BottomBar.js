import React from "react";
import { Link } from "react-router-dom";

class BottomBar extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          Fixed bottom
        </a>
      </nav>
    );
  }
}
