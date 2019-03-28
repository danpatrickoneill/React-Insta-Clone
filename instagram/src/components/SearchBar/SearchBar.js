import React from "react";
import styled, { css } from "styled-components";

// import "./SearchBar.css";
import { Icon } from "../../styles/reusables";

const Header = styled.header``;

const InstaNav = styled.nav`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InstaLogo = styled.img`
  max-height: 80px;
`;

const SearchInput = styled.input``;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      searchText: ""
    };
  }

  handleChanges = event => {
    let value = event.target.value;
    this.setState({
      searchText: value
    });
    console.log(this.state);
    // If this uses value instead of searchText, searches in realtime
    this.props.searchPosts(value);
  };

  render() {
    return (
      <Header>
        <InstaNav>
          <Icon className="fab fa-instagram" />
          <InstaLogo
            src="https://fontmeme.com/images/instagram-new-logo.png"
            alt="IG logo"
          />
          <SearchInput
            type="search"
            placeholder="Search"
            onChange={this.handleChanges}
          />
          <Icon className="far fa-compass" />
          <Icon className="far fa-heart" />
          <Icon className="far fa-user" />
        </InstaNav>
      </Header>
    );
  }
}

export default SearchBar;
