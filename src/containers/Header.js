/*
    Container with functionality to open and close menu
*/

import React, { Component } from "react";
import HeaderComponent from "../components/header/HeaderComponent";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.openAndCloseMenu = this.openAndCloseMenu.bind(this);
  }

  openAndCloseMenu() {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }));
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <HeaderComponent
        menuOpen={menuOpen}
        openAndCloseMenu={this.openAndCloseMenu}
      />
    );
  }
}

export default Header;
