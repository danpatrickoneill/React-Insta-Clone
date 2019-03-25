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
        <nav className="SearchNavOne">
          <i className="fab fa-instagram" />
          <img
            src="https://fontmeme.com/images/instagram-new-logo.png"
            alt="IG logo"
          />
        </nav>
        <input className="SearchBar" type="text" placeholder="Search" />
        <nav className="SearchNavTwo">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </nav>
      </div>
    );
  }
}

export default SearchBar;
