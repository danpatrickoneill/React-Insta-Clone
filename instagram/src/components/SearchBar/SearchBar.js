import React from "react";

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
        <nav className="SearchNav" />
      </div>
    );
  }
}

export default SearchBar;
