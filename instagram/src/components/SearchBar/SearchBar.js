import React from "react";

import { Button } from "reactstrap";

import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="SearchContainer">
        <nav className="SearchNav">
          <img src="../../../../public/assets/ig-glyph-logo.png" alt="" />
          <img alt="" />
          <input
            className="SearchBar"
            type="text"
            placeholder="Search here..."
          />
          <img alt="" />
          <img alt="" />
          <img alt="" />
        </nav>
      </div>
    );
  }
}

export default SearchBar;
