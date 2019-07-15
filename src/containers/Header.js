/*
    Container with functionality to open and close menu
*/

import React, { Component } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import api from "../utils/api";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: "",
      menu: []
    };

    this.openAndCloseMenu = this.openAndCloseMenu.bind(this);
  }

  componentDidMount() {
    api.getMenu().then(menu => this.setState({ menu }));
  }

  openAndCloseMenu(menuOpen) {
    this.setState({ menuOpen });
  }

  render() {
    const { menuOpen, menu } = this.state;
    return (
      <HeaderComponent
        menuOpen={menuOpen}
        openAndCloseMenu={this.openAndCloseMenu}
        menu={menu}
      />
    );
  }
}

export default Header;
